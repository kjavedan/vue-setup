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
  uid: 34563557,
  // Set the user role
  role: 'audience'
})

const client = AgoraRTC.createClient({
  mode: 'live',
  codec: 'vp8'
})

const joined = ref(false)
const audioTrack = ref(null)
const videoTrack = ref(null)
const remoteUsers = ref({})

console.log(remoteUsers)
console.log(audioTrack)
console.log(videoTrack)

// change the streams
const handleClick = (id, uid, channelName) => {
  console.log(id, uid, channelName, 'id, uid, channelName')
  liveStreamsData.value = liveStreamsData.value.map((item) =>
    item.id === id ? { ...item, selected: true } : { ...item, selected: false }
  )
  leaveStream()
  joinStream(uid, channelName)
}

const joinStream = (uid, channelName) => {
  console.log('join stream')
  getStreamToken(34563557, 'dashan_test01')
}

const handleUserPublished = (user, mediaType) => {
  client.subscribe(user, mediaType)
  // delete remoteUsers.value[user.uid]
  remoteUsers[user.uid] = user
  console.log(remoteUsers, 'remoteUsers handleUserPublished11111111')
}

const handleUserUnpublished = (user, mediaType) => {
  if (mediaType == 'video') {
    delete remoteUsers.value[user.uid]
    console.log(remoteUsers, 'handleUserUnpublished222222')
  }
}

const handleJoined = (user) => {
  console.log('ran joined stream')
  // delete remoteUsers[user.uid]
  remoteUsers.value[user.uid] = user
  // console.log(remoteUsers, 'remoteUsers handleJoined')
  // window.location.reload()
  setTimeout(() => {
    joined.value = true
  }, 500)
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
  await client.leave()
  joined.value = false
  console.log(remoteUsers, 'leaveStream')
}

// --------------------------------------------API Functions-----------------------------------------
const fetchLiveStreamData = async () => {
  try {
    const res = await homePageServices.getLiveStreams('thai')
    //Setting the liveStream data & selecting the first item in the list to be streamed
    liveStreamsData.value = res.data.map((item, index) => ({ ...item, selected: index === 0 }))

    //Get Frist stream Token
    // getStreamToken(liveStreamsData.value[0].uid, liveStreamsData.value[0].channelName)
    // getStreamToken(34563557, 'test01')
  } catch (err) {
    console.error(err)
  }
}

const getStreamToken = async (uid, channelName) => {
  try {
    const data = { uid, channelName }
    const res = await homePageServices.getStreamToken(data)
    console.log(res, 'getStreamToken', uid, channelName)
    options.value.channel = channelName
    options.value.uid = uid
    options.value.token = res.data
    console.log('ran get stream token')
    client.setClientRole('audience', { level: 1 })
    client.on('user-published', handleUserPublished)
    console.log('ran between')
    client.on('user-unpublished', handleUserUnpublished)
    console.log('ran after', options.value.appId, channelName, res.data, uid)
    await client.join(options.value.appId, channelName, res.data, 34563557)
    client.on('user-joined', handleJoined)
  } catch (err) {
    console.log(err)
  }
}

// ------------------------------------------------Mounted------------------------------------------
onMounted(() => {
  // API Call to get the current live streams
  // initAgora()
  fetchLiveStreamData()
})

//--------------------------------------------watch----------------------------------
watch(
  () => remoteUsers,
  (newVal, oldVal) => {
    console.log('remote user got updated')
    console.log(oldVal)
    console.log(newVal)
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<template>
  <main class="main">
    <div class="content">
      <div class="main-stream">
        <!-- The Live Stream Video will go here -->
        <div class="video-wrapper">
          <AgoraVideoPlayer
            v-for="item in remoteUsers"
            :key="item.uid"
            :videoTrack="item.videoTrack"
            :audioTrack="item.audioTrack"
            :text="item.uid"
            :joined="joined"
          >
          </AgoraVideoPlayer>
        </div>
        <!-- <div v-else key="1" style="height: 100%">
          <video src="" controls autoplay preload width="100%" height="100%"></video>
        </div> -->
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
      .video-wrapper {
        border-radius: $border-radius;
        background-color: black;
        height: 250px;

        @include tablet {
          height: 350px;
        }
        @include pc {
          height: 100%;
        }
      }
    }
    .related-streams {
      // border: solid 1px red;
      height: auto;
      overflow-y: scroll;
      max-height: 100%;
      @include pc {
        max-height: 470px;
      }
      @include large-screen {
        max-height: 600px;
      }
    }
  }
}
</style>
