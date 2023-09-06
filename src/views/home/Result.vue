<script setup>
import Marble from '@/components/Marble.vue'
</script>
<template>
  <div class="result">
    <h5 class="title">League Result</h5>
    <div class="info">
      <p>
        issue:
        <span> 43546854 </span>
      </p>
      <p>start: 2023-09-03 10:13:30</p>
      <p>end: 2023-09-03 10:13:30</p>
    </div>
    <div class="marbles-wrapper">
      <Marble size="small"></Marble>
      <Marble size="small"></Marble>
      <Marble size="small"></Marble>
      <Marble size="small"></Marble>
      <Marble size="small"></Marble>
      <Marble size="small"></Marble>
      <Marble size="small"></Marble>
      <Marble size="small"></Marble>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.result {
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: solid 1px gray;
  height: fit-content;
  .title {
    margin-bottom: 0.5rem;
  }
  .info {
    text-transform: capitalize;
    font-size: 12px;
    margin-bottom: 1rem;
    span {
      color: $secondary-color;
    }
  }
  .marbles-wrapper {
    @include flex-row;
    gap: 4px;
  }
}
</style>
