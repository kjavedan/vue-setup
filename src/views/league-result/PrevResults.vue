<script setup>
import PrevResult from './PrevResult.vue'
</script>
<template>
  <div class="prev-results">
    <div class="sections-title">
      <div class="info-titles">
        <p>isuue</p>
        <p>start</p>
        <p>end</p>
      </div>
      <p class="marbles-title">Result</p>
      <p class="operate-title">Operate</p>
    </div>
    <div class="results-content-wrapper">
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
      <PrevResult></PrevResult>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.prev-results {
  position: relative;
  background-color: $bg-card-color;
  border-radius: $border-radius;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 0rem 1rem;
  margin-top: 1rem;
  height: 45vh;
  text-transform: capitalize;
  @include tablet {
    padding: 0rem 2rem;
  }
  @include pc {
    padding: 0;
  }

  .sections-title {
    border: solid 1px blue;
    display: none;
    @include pc {
      display: block;
      position: absolute;
      left: 0;
      width: 100%;
      height: 50px;
      @include flex-row-space-between;
      padding: 0.5rem 1rem;
      padding-right: 2rem;

      .info-titles {
        width: 45%;
        @include flex-row-space-between;
      }
    }
  }
  .results-content-wrapper {
    overflow-y: scroll;
    height: 100%;
    padding: 2rem 0rem;
    @include pc {
      padding-top: 0;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 50px;
      width: 100%;
      left: 0;
      height: calc(100% - 50px);
      position: absolute;
    }
  }
}
</style>
