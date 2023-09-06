<script setup>
import Marble from '@/components/Marble.vue'
import { ref, watch } from 'vue'

const props = defineProps(['name', 'createTime', 'result', 'videoUrl'])
const results = ref([])

// Create a watcher for props.result
watch(
  () => props.result,
  (newResult) => {
    results.value = newResult ? newResult.split(',') : []
  }
)
</script>
<template>
  <div class="current-result">
    <div class="result-text">
      <div class="live">
        <font-awesome-icon icon="satellite-dish" beat />
        live
      </div>
      <div class="result-info">
        Issue: <span> {{ name }}</span>
      </div>
      <div class="result-info">
        start time: <span> {{ createTime }}</span>
      </div>

      <div class="marbles-wrapper">
        <Marble v-for="(result, i) in results" :key="i" :val="result"></Marble>
      </div>
    </div>
    <div class="result-timer">
      <!-- houer -->
      <div class="unit">
        <span class="number">02</span>
        <span class="text">hour</span>
      </div>
      <div>:</div>
      <!-- minute -->
      <div class="unit">
        <span class="number">22</span>
        <span class="text">hour</span>
      </div>
      <div>:</div>
      <!-- seonc -->
      <div class="unit">
        <span class="number">11</span>
        <span class="text">hour</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.current-result {
  // height: 280px;
  background-color: $bg-card-color;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  padding: 1.5rem 1rem;

  @include tablet {
    @include flex-row-space-between;
    padding: 1.5rem 2rem;
  }
  .live {
    width: 50px;
    height: 20px;
    @include flex-row-space-around;
    background-color: #d11919;
    border-radius: 2px;
    font-size: 12px;
    margin-bottom: 1rem;

    @include pc {
      width: 70px;
      height: 30px;
      font-size: 14px;
      font-weight: $font-weight-bold;
    }
  }
  .result-info {
    color: #fe2c55;
    font-size: 0.8rem;
    span {
      color: $secondary-color;
    }

    @include pc {
      font-size: 1rem;
    }
  }
  .marbles-wrapper {
    @include flex-row;
    margin-top: 1rem;
    gap: 2px;

    @include pc {
      gap: 10px;
    }
  }

  .result-timer {
    height: 90px;
    width: 100%;
    background-color: black;
    border-radius: $border-radius;
    margin-top: 1rem;

    @include flex-row-space-around;

    @include tablet {
      max-width: 450px;
      height: 140px;
      margin-left: 1rem;
    }

    @include large-screen {
      margin-right: 100px;
    }

    font-size: 2rem;
    font-weight: $font-weight-bold;
    .unit {
      @include flex-column-space-around;

      .text {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
}
</style>
