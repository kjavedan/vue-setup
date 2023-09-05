<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="container">
    <Navbar></Navbar>
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/global.scss';
.container {
  border: solid 1px white;
  padding: 0.5rem;
  width: 95%;
  // height: 100vh;

  margin: 0 auto;

  @include large-screen {
    width: 1500px;
  }
}
</style>
