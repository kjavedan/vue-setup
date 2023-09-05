<script setup>
import CurrentResult from './league-result/CurrentResult.vue'
import PrevResult from './league-result/PrevResult.vue'
import Pagination from './league-result/Footer.vue'
</script>

<template>
  <div class="container">
    <CurrentResult> </CurrentResult>
    <PrevResult></PrevResult>
    <Pagination></Pagination>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.container {
  border: solid 1px rgb(255, 255, 255);
  width: 100%;
  padding: 0;
  margin-top: 1rem;
}
</style>
