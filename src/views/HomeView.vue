<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

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
        <!-- stream 1 -->
        <div class="stream">
          <img src="@/assets/images/2.png" alt="" />
          <div class="text">
            <h4 class="title">title</h4>
            <p class="caption">description.</p>
          </div>
        </div>
        <!-- stream 2 -->
        <div class="stream">
          <img src="@/assets/images/2.png" alt="" />
          <div class="text">
            <h4 class="title">title</h4>
            <p class="caption">description.</p>
          </div>
        </div>
        <!-- stream 3 -->
        <div class="stream">
          <img src="@/assets/images/2.png" alt="" />
          <div class="text">
            <h4 class="title">title</h4>
            <p class="caption">description.</p>
          </div>
        </div>
        <!-- stream 3 -->
        <div class="stream">
          <img src="@/assets/images/2.png" alt="" />
          <div class="text">
            <h4 class="title">title</h4>
            <p class="caption">description.</p>
          </div>
        </div>
        <!-- stream 3 -->
        <div class="stream">
          <img src="@/assets/images/2.png" alt="" />
          <div class="text">
            <h4 class="title">title</h4>
            <p class="caption">description.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';

.main {
  border: solid white;
  margin-top: 2rem;

  .content {
    display: grid;
    border: solid white;
    gap: 1rem;

    @include pc {
      grid-template-columns: 3fr 1fr;
      height: 470px;
    }
    @include large-screen {
      grid-template-columns: 3fr 1fr;
      height: 570px;
    }

    .main-stream {
      border: solid 1px blue;
      img {
        width: 100%;
        border-radius: $border-radius;
      }
    }
    .related-streams {
      border: solid 1px red;
      height: auto;
      overflow-y: scroll;

      .stream {
        max-height: 120px;
        border: solid 1px white;
        display: flex;
        margin-bottom: 1rem;
        overflow: hidden;
        img {
          height: 100px;
          max-width: 150px;
          border-radius: $border-radius;
        }

        .text {
          height: 100%;
          border: solid 1px red;
          padding: 0 0.5rem;
          .title {
            font-size: 1.4rem;
          }
          .caption {
            margin-top: 5px;
          }
        }
      }
    }
  }
}
</style>
