<template>
  <div
    style="width: 100%; border: 1px solid rgb(255, 255, 255); background-color: rgb(255, 255, 255)"
  >
    <!-- <div v-if="text" :style="{ marginTop: '10px', marginBottom: '10px' }">
        {{ text }}
      </div> -->
    <div ref="videoRef" :style="{ width: videow, height: `${videoh}` }" style="margin: 0 auto" />
    <!-- <div style="width: 36.6vh;height: 65vh;background-color: #fff;margin: 0 auto;">ssss</div> -->
  </div>
</template>

<script>
export default {
  name: 'AgoraVideoPlayer',
  props: {
    videow: {
      default: () => '36.6vh'
    },
    videoh: {
      default: () => '65vh'
    },
    videoTrack: {
      type: Object,
      default: () => null
    },
    audioTrack: {
      type: Object,
      default: () => null
    },
    text: {
      type: [String, Number],
      default: () => ''
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // videow:'100%',
      // videoh:'400px',
    }
  },
  watch: {
    // watch第一次绑定值的时候不会执行监听，修改数据才会触发函数
    videoTrack(newVal, oldVal) {
      // console.log("oldVal:", oldVal); // coderkey
      // console.log("newVal:", newVal); // pink
      if (newVal & this.$refs['videoRef']) {
        newVal.paly(this.$refs['videoRef'])
      }
    },
    audioTrack(newVal, oldVal) {
      // console.log("oldVal:", oldVal); // coderkey
      // console.log("newVal:", newVal); // pink
      if (newVal) {
        newVal.paly()
      }
    }
  },
  mounted() {
    // this.videoTrack?.play(this.$refs["videoRef"], config);
    // this.audioTrack?.play();
    if (this.videoTrack) {
      this.videoTrack.play(this.$refs['videoRef'], this.config)
    }
    if (this.audioTrack) {
      this.audioTrack.play()
    }
  },
  methods: {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
