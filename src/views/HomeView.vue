<script setup>
import Stream from './home/Stream.vue'
import LeagueResultsCard from './home/LeagueResultsCard.vue'
import { onMounted, ref, watch } from 'vue'
import homePageServices from '../services/homePageServices'
import AgoraRTC from 'agora-rtc-sdk-ng'
import AgoraVideoPlayer from './home/AgoraVideoPlayer.vue'

// Recived from the api
const liveStreamsData = ref([])

// Data for configuring Agora
const options = ref({
  appId: '90afeaeb26d84a3f8e48dd1c14a8ab38',
  // Set the channel name.
  channel: '',
  // Pass your temp token here.
  token: '',
  // Set the user ID.
  uid: 0,
  // Set the user role
  role: 'audience'
})

const rtc = ref({
  localAudioTrack: null,
  localVideoTrack: null,
  client: null
})

const joined = ref(false)
const audioTrack = ref(null)
const videoTrack = ref(null)
const remoteUsers = ref({})

console.log(remoteUsers)
console.log(audioTrack)
console.log(videoTrack)

const initAgora = () => {
  rtc.value.client = AgoraRTC.createClient({ mode: 'live', codec: 'vp8' })
}

// change the streams
const handleClick = (id, uid, channelName) => {
  liveStreamsData.value = liveStreamsData.value.map((item) =>
    item.id === id ? { ...item, selected: true } : { ...item, selected: false }
  )
  leaveStream()
  joinStream(uid, channelName)
}

const joinStream = (uid, channelName) => {
  console.log('join stream')
  getStreamToken(uid, channelName)
}

const handleUserPublished = async (user, mediaType) => {
  console.log('ran handle published user')
  await rtc.value.client.subscribe(user, mediaType)
  delete remoteUsers.value[user.uid]
  remoteUsers[user.uid] = user
  console.log(remoteUsers)
}

const handleUserUnpublished = (user, mediaType) => {
  console.log('ran user unpublished')
  if (mediaType == 'video') {
    delete remoteUsers.value[user.uid]
    console.log(remoteUsers)
  }
}

const handleJoined = (user) => {
  console.log('ran joined stream')
  delete remoteUsers[user.uid]
  remoteUsers.value[user.uid] = user
  console.log(remoteUsers)
}

const leaveStream = async () => {
  if (audioTrack.value) {
    audioTrack.value.close()
    audioTrack.value = null
  }
  if (videoTrack.value) {
    videoTrack.value.close()
    videoTrack.value = null
  }
  remoteUsers.value = {}
  await rtc.value.client.leave()
  joined.value = false
  console.log(remoteUsers)
}

// --------------------------------------------API Functions-----------------------------------------
const fetchLiveStreamData = async () => {
  try {
    const res = await homePageServices.getLiveStreams('thai')
    //Setting the liveStream data & selecting the first item in the list to be streamed
    liveStreamsData.value = res.data.map((item, index) => ({ ...item, selected: index === 0 }))

    //Get Frist stream Token
    getStreamToken(liveStreamsData.value[0].uid, liveStreamsData.value[0].channelName)
  } catch (err) {
    console.error(err)
  }
}

const getStreamToken = async (uid, channelName) => {
  try {
    const data = { uid, channelName }
    const res = await homePageServices.getStreamToken(data)
    options.value.channel = channelName
    options.value.uid = uid
    options.value.token = res.data
    console.log('ran get stream token')
    console.log(rtc.value)
    rtc.value.client.setClientRole('audience', { level: 1 })
    rtc.value.client.on('user-published', handleUserPublished)
    console.log('ran between')
    rtc.value.client.on('user-unpublished', handleUserUnpublished)
    console.log('ran after')
    await rtc.value.client.join(options.value.appId, channelName, res.data, uid)
    rtc.value.client.on('user-joined', handleJoined)
  } catch (err) {
    console.log(err)
  }
}

// ------------------------------------------------Mounted------------------------------------------
onMounted(() => {
  // API Call to get the current live streams
  fetchLiveStreamData()
  initAgora()
})

//--------------------------------------------watch----------------------------------
watch([remoteUsers, joined, audioTrack, videoTrack, rtc, options], () => {
  console.log(remoteUsers.value)
  console.log('audio: ' + audioTrack.value)
  console.log('video: ' + videoTrack.value)
  console.log('joined: ' + joined.value)
  console.log(options.value)
  console.log(rtc.value)
})
</script>

<template>
  <main class="main">
    <div class="content">
      <div class="main-stream">
        <!-- The Live Stream Video will go here -->
      </div>
      <div class="related-streams">
        <div v-if="liveStreamsData.length">
          <Stream
            v-for="stream in liveStreamsData"
            :key="stream.id"
            :id="stream.id"
            :selected="stream.selected"
            :channelName="stream.channelName"
            :name="stream.name"
            :userId="stream.userId"
            :uid="stream.uid"
            :createTime="stream.createTime"
            :area="stream.area"
            :updateTime="stream.updateTime"
            @handleStreamClick="handleClick"
          ></Stream>
        </div>

        <LeagueResultsCard></LeagueResultsCard>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.main {
  // border: solid white;
  margin-top: 2rem;

  .content {
    display: grid;
    // border: solid white;
    gap: 1rem;

    @include pc {
      grid-template-columns: 3fr 1fr;
      max-height: 470px;
    }
    @include large-screen {
      max-height: 570px;
    }

    .main-stream {
      // border: solid 1px blue;
      .local-player,
      .remote-player {
        width: 100%;
        height: 100%;
        max-height: 470px;
        border-radius: $border-radius;
        border: solid 1px white;
        @include large-screen {
          max-height: 570px;
        }
      }
    }
    .related-streams {
      // border: solid 1px red;
      height: auto;
      overflow-y: scroll;
      max-height: 100%;
      // padding-bottom: 5rem;
    }
  }
}
</style>
