<template>
  <div class="video-player" style="width: 100%; height: 100%; padding-top: 2.5%">
    <div ref="videoRef" :style="{ width, height }" />
  </div>
</template>

<script>
const DEFAULT_WIDTH = '100%'
const DEFAULT_HEIGHT = '95%'
</script>

<script setup>
import { ref, watch, onUnmounted, onMounted } from 'vue'

const videoRef = ref()

const emit = defineEmits(['click'])
const props = defineProps({
  videoTrack: {
    type: Object,
    default: null
  },
  audioTrack: {
    type: Object,
    default: null
  },
  config: {
    type: Object,
    default: {}
  },
  text: {
    type: [String, Number],
    default: ''
  },
  joined: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: DEFAULT_WIDTH
  },
  height: {
    type: String,
    default: DEFAULT_HEIGHT
  },
  style: {
    type: Object,
    default: {}
  }
})

const { videoTrack, audioTrack, config } = props

onMounted(() => {
  videoTrack?.play(videoRef.value, config)
  audioTrack?.play()
})

watch(
  () => props.videoTrack,
  (track, oldTrack) => {
    console.log(
      track,
      videoRef.value,
      'videoRefvideoRefvideoRefvideoRef0-------------------------------------------'
    )
    if (track && videoRef.value) {
      track.play(videoRef.value)
      videoTrack?.play()
    }
  }
)

watch(
  () => props, // Watch the entire props object
  (newProps, oldProps) => {
    console.log('-------------------Props updated---------------------:')
    console.log('New props:', newProps)
    // console.log('Old props:', oldProps)

    // You can perform additional actions here if needed.
  },
  {
    deep: true, // Enable deep watch to track nested objects/arrays within props
    immediate: true // Trigger the watch immediately on component creation
  }
)

onMounted(() => {
  // console.log(videoTrack)
})

onUnmounted(() => {
  videoTrack?.close()
  audioTrack?.close()
})
</script>
<style lang="scss">
@import '@/assets/scss/global.scss';
.video-player {
}
</style>
