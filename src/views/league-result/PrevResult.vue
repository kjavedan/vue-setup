<script setup>
import Marble from '@/components/Marble.vue'
const props = defineProps(['name', 'createTime', 'endTime', 'startTime', 'videoUrl', 'result'])
const results = props.result ? props.result.split(',') : null
console.log(results)
</script>
<template>
  <div class="result">
    <div class="info">
      <h3 class="title">info</h3>
      <div>
        <span> Issue: </span>
        {{ name }}
      </div>
      <p>
        <span> start: </span>
        {{ startTime ? startTime : '----------------------' }}
      </p>
      <p>
        <span> ends: </span>
        {{ endTime ? endTime : '----------------------' }}
      </p>
    </div>
    <div class="marble-result">
      <h3 class="title">Result</h3>
      <div class="marbles-wrapper">
        <Marble v-for="(result, i) in results" :key="i" :val="result"></Marble>
      </div>
    </div>
    <div class="operate">
      <el-button>
        <font-awesome-icon icon="fa-solid fa-play" bounce />
        <span> playback </span>
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.result {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: solid gray;
  // border: solid 1px yellow;

  @include pc {
    @include flex-row-space-between;
    // height: 50px;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;

    .info {
      // border: solid 1px red;
      width: 50%;
      height: 100%;
      @include flex-row-space-between;
    }
  }
  .title {
    text-transform: capitalize;
    margin-bottom: 5px;

    @include pc {
      display: none;
    }
  }
  .info {
    p {
      font-size: 14px;

      @include pc {
        span {
          display: none;
        }
      }
    }
    div {
      font-size: 14px;
      span {
        color: $secondary-color;

        @include pc {
          display: none;
        }
      }
    }
  }
  .marble-result {
    margin-top: 10px;
    // border: solid 1px blue;
    .marbles-wrapper {
      @include flex-row;
      gap: 2px;
    }
    @include pc {
      margin-top: unset;
    }
  }
  .operate {
    margin-top: 2rem;

    @include pc {
      // border: solid 1px red;
      width: 90px;
      margin-top: unset;
    }

    .el-button {
      background-color: $btn-color;
      color: white;
      padding: 1rem;
      width: 100%;
      height: 45px;
      box-shadow: $box-shadow;
      border: none;
      outline: none;
      border-radius: 6px;
      &:hover {
        background-color: #cf1a3e;
      }
      span {
        margin-left: 10px;

        @include pc {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
