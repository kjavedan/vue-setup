<script setup></script>
<template>
  <div class="stream">
    <img src="@/assets/images/2.png" alt="" />
    <div class="text">
      <div class="title">
        <h4>Title</h4>
        <p class="caption">description.vsdfavgb sdfgsd wsdgasdgasdgasdf sdfgbwdfg wr gwrgawr</p>
      </div>
      <div class="live">
        <font-awesome-icon icon="satellite-dish" />
        Live
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.stream {
  max-height: 120px;
  // border: solid 1px white;
  display: flex;
  margin-bottom: 0.5rem;
  overflow: hidden;
  img {
    height: 100px;
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
      height: 36px;
      overflow: hidden;
      text-overflow: ellipsis;
      //   white-space: pre-wrap;
      // border: solid 1px yellow;
    }
    .live {
      width: 50px;
      height: 20px;
      @include flex-row-space-around;
      background-color: #d11919;
      border-radius: 2px;
      font-size: 12px;
      margin-bottom: 15px;
    }
  }
}
</style>
