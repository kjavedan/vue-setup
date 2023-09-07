<script setup>
import { ref } from 'vue'

const currentHour = ref('00')
const currentMinute = ref('00')
const currentSecond = ref('00')

const updateTime = () => {
  const now = new Date()
  currentHour.value = String(now.getHours()).padStart(2, '0')
  currentMinute.value = String(now.getMinutes()).padStart(2, '0')
  currentSecond.value = String(now.getSeconds()).padStart(2, '0')
}

// Update time every second
setInterval(updateTime, 1000)

// Initial update
updateTime()
</script>

<template>
  <div class="result-clock">
    <!-- houer -->
    <div class="unit">
      <span class="number">{{ currentHour }}</span>
      <span class="text">{{ $t('leagueResults.hour') }}</span>
    </div>
    <div>:</div>
    <!-- minute -->
    <div class="unit">
      <span class="number">{{ currentMinute }}</span>
      <span class="text">{{ $t('leagueResults.minute') }}</span>
    </div>
    <div>:</div>
    <!-- seonc -->
    <div class="unit">
      <span class="number">{{ currentSecond }}</span>
      <span class="text">{{ $t('leagueResults.second') }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.result-clock {
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
</style>
