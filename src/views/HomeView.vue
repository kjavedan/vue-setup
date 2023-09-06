<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import Stream from './home/Stream.vue'
import LeagueResultsCard from './home/LeagueResultsCard.vue'

// import AgoraRTC from 'agora-rtc-sdk-ng'
// const mainStreamUid = 12345678 // Replace with the UID of your main stream
// const relatedStreamUids = [98765432, 54321098] // Replace with the UIDs of related streams
// const agoraConfig = {
//   // Agora App ID and other configuration options
//   appId: 'YOUR_APP_ID',
//   channel: 'YOUR_CHANNEL_NAME',
//   role: 'audience', // Set the role to 'audience' for viewers
//   token: 'YOUR_CHANNEL_TOKEN' // You might need to implement token generation
// }
// let rtc
// // Initialize the Agora RTC client
// rtc = AgoraRTC.createClient({ mode: 'live', codec: 'vp8' })
</script>

<template>
  <main class="main">
    <div class="content">
      <div class="main-stream">
        <img src="@/assets/images/2.png" alt="" />
      </div>
      <div class="related-streams">
        <Stream></Stream>
        <Stream></Stream>

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
      img {
        width: 100%;
        height: 100%;
        max-height: 470px;
        border-radius: $border-radius;

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
