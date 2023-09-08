<template>
  <div style="width: 100%; border: 1px solid black; background-color: black">
    <div v-if="text" :style="{ marginTop: '10px', marginBottom: '10px' }">{{ text }}</div>
    <div ref="videoRef" :style="{ width, height }" />
  </div>
</template>

<script>
const DEFAULT_WIDTH = '480px'
const DEFAULT_HEIGHT = '320px'
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
    console.log(track, videoRef.value, 'videoRefvideoRefvideoRefvideoRef')
    if (track && videoRef.value) {
      track.play(videoRef.value)
    }
  }
)

watch(
  () => props.audioTrack,
  (track) => {
    track?.play()
  }
)

onMounted(() => {
  console.log(videoTrack)
})

onUnmounted(() => {
  videoTrack?.close()
  audioTrack?.close()
})
</script>
