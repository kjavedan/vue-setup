<template>
  <div class="marble">
    <div class="outer-circle">
      <div class="inner-circle">
        <p class="value">01</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.marble {
  border: solid;

  .outer-circle {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: red;
    @include flex-centralize;

    @include slim-mobile {
      height: 20px;
      width: 20px;
    }
    @include pc {
      height: 40px;
      width: 40px;
    }

    .inner-circle {
      height: 20px;
      width: 20px;
      background-color: white;
      color: black;
      font-size: 12px;
      font-weight: $font-weight-bold;
      border-radius: 50%;
      @include flex-centralize;

      @include slim-mobile {
        height: 15px;
        width: 15px;
      }
      @include pc {
        height: 25px;
        width: 25px;
      }
    }
  }
}
</style>
