<script setup>
import { defineProps, defineEmits } from 'vue'
const { id, selected, channelName, name, userId, uid, createTime, area, updateTime } = defineProps([
  'id',
  'selected',
  'channelName',
  'name',
  'userId',
  'uid',
  'createTime',
  'area',
  'updateTime'
])

const emit = defineEmits(['handleStreamClick'])

const handleClick = () => {
  emit('handleStreamClick', id, uid, channelName)
}
</script>
<template>
  <div :class="['stream', { selected }]" @click="handleClick">
    <img src="@/assets/images/2.png" alt="" />
    <div class="text">
      <div class="title">
        <h4>{{ name }}</h4>
        <p class="caption">description.vsdfavgb sdfgsd wsdgasdgasdgasdf sdfgbwdfg wr gwrgawr</p>
      </div>
      <div class="live">
        <font-awesome-icon icon="satellite-dish" beat />
        <span>
          {{ $t('leagueResults.live') }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.stream {
  cursor: pointer;
  max-height: 120px;
  // border: solid 1px white;
  display: flex;
  margin-bottom: 0.5rem;
  overflow: hidden;

  &.selected {
    border: 3px solid $secondary-color;
    border-radius: $border-radius;
  }
  img {
    height: 110px;
    max-width: 150px;
    border-radius: $border-radius;
  }

  .text {
    // height: 100%;
    // border: solid 1px red;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .caption {
      font-size: 12px;
      height: 34px;
      overflow: hidden;
      text-overflow: ellipsis;
      //   white-space: pre-wrap;
      // border: solid 1px yellow;
    }
    .live {
      padding: 3px 10px;
      width: fit-content;
      @include flex-row-space-around;
      background-color: #d11919;
      border-radius: 2px;
      font-size: 12px;
      margin-bottom: 5px;
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
