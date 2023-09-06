<script setup>
const props = defineProps(['size'])
const { size } = props
console.log(size)
</script>

<template>
  <div class="marble">
    <div :class="['outer-circle', { small: size }]">
      <div :class="['inner-circle', { small: size }]">
        <p class="value">01</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.marble {
  // border: solid;

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

      &.small {
        height: 23px;
        width: 23px;
      }
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
        &.small {
          height: 15px;
          width: 15px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
