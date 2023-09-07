<script setup>
import Marble from '@/components/Marble.vue'
import Clock from './Clock.vue'
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
        <span>
          {{ $t('leagueResults.live') }}
        </span>
      </div>
      <div class="result-info">
        {{ $t('leagueResults.issue') }}: <span> {{ name }}</span>
      </div>
      <div class="result-info">
        {{ $t('leagueResults.startingTime') }}: <span> {{ createTime }}</span>
      </div>

      <div class="marbles-wrapper">
        <Marble v-for="(result, i) in results" :key="i" :val="result"></Marble>
      </div>
    </div>
    <Clock></Clock>
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
    padding: 5px 15px;
    width: fit-content;
    span {
      margin-left: 5px;
    }
    @include flex-row-space-around;
    background-color: #d11919;
    border-radius: 2px;
    font-size: 12px;
    margin-bottom: 1rem;

    @include pc {
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
    gap: 3px;

    @include pc {
      gap: 10px;
    }
  }
}
</style>
