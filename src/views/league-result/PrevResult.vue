<template>
  <div class="prev-result">prev result</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.prev-result {
  background-color: $bg-card-color;
  border-radius: $border-radius;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 1.5rem 1rem;
  margin-top: 1rem;
}
</style>
