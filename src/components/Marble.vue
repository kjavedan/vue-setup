<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  size: String,
  val: String
})

const circleColorClass = computed(() => {
  const colorClasses = {
    '01': 'yellow',
    '02': 'blue',
    '03': 'red',
    '04': 'purple',
    '05': 'orange',
    '06': 'green',
    '07': 'brown',
    '08': 'black'
  }

  return colorClasses[props.val] || 'default-color-circle'
})
</script>

<template>
  <div class="marble">
    <div :class="['outer-circle', circleColorClass, { small: size }]">
      <div :class="['inner-circle', { small: size }]">
        <p class="value">{{ val }}</p>
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
  .yellow {
    background-color: #b78728;
  }

  .blue {
    background-color: #042072;
  }

  .red {
    background-color: #b1130f;
  }

  .purple {
    background-color: #1c1356;
  }

  .orange {
    background-color: #e94332;
  }

  .green {
    background-color: #045d57;
  }

  .brown {
    background-color: #4c1b27;
  }

  .black {
    background-color: #1b262e;
  }

  .default-color-circle {
    background-color: gray; /* Default color for unknown values */
  }
}
</style>
