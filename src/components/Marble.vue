<template>
  <div class="marble">
    <div :class="['outer-circle', circleColorClass, { small: size }]">
      <div :class="['inner-circle', { small: size }]">
        <p class="value">{{ val }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  size: String,
  val: String
})

const circleColorClass = computed(() => {
  const colorClasses = {
    '01': 'red-circle',
    '02': 'blue-circle',
    '03': 'green-circle',
    '04': 'yellow-circle',
    '05': 'orange-circle',
    '06': 'purple-circle',
    '07': 'pink-circle',
    '08': 'cyan-circle'
  }

  return colorClasses[props.val] || 'default-color-circle'
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.marble {
  // border: solid;

  .outer-circle {
    height: 30px;
    width: 30px;
    border-radius: 50%;
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
  .red-circle {
    background-color: red;
  }

  .blue-circle {
    background-color: blue;
  }

  .green-circle {
    background-color: green;
  }

  .yellow-circle {
    background-color: yellow;
  }

  .orange-circle {
    background-color: orange;
  }

  .purple-circle {
    background-color: purple;
  }

  .pink-circle {
    background-color: pink;
  }

  .cyan-circle {
    background-color: cyan;
  }

  .default-color-circle {
    background-color: gray; /* Default color for unknown values */
  }
}
</style>
