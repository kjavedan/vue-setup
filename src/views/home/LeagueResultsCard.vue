<script setup>
import Result from './Result.vue'
</script>
<template>
  <div class="league-results-card">
    <Result></Result>
    <Result></Result>
    <div class="see-arrow">
      <font-awesome-icon icon="fa-solid fa-arrow-right-long" shake />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.league-results-card {
  height: 250px;
  width: 100%;
  background-color: $bg-card-color;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  padding: 1.5rem;
  overflow-y: scroll;
  @include large-screen {
    height: 355px;
  }
  .see-arrow {
    cursor: pointer;
    padding: 1rem;
    padding-bottom: 0;
    display: flex;
    justify-content: right;
    align-items: center;
    font-size: 1.5rem;
  }
}
</style>
