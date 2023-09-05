<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="main">
    <div class="content">
      <div class="main-stream">
        <video controls autoplay preload width="100%" height="100%">
          <source :src="mainStreamUrl" type="video/mp4" />
        </video>
      </div>
      <div class="related-streams">
        <div v-for="(streamUrl, index) in relatedStreams" :key="index"></div>
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
    @include pc {
      grid-template-columns: 3fr 1fr;
    }

    .main-stream {
      border: solid 1px blue;
      height: 250px;
    }
    .related-streams {
      border: solid 1px red;
    }
  }
}
</style>
