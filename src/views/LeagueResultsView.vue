<script setup>
import { onMounted, ref, watch } from 'vue'
import CurrentResult from './league-result/CurrentResult.vue'
import PrevResults from './league-result/PrevResults.vue'
import Pagination from './league-result/Footer.vue'
import leagueResultServices from '../services/leagueResultServices'

// States
const pageNum = ref(1)
const pageSize = ref(20)

// Current Live Stream State
const currentLiveData = ref({})

// Previus Live Stream Result List State
const prevLiveStreamsData = ref({})

// Func
const handleChangePageSize = (newSize) => {
  pageSize.value = newSize
}
const handleChangePageNum = (newNum) => {
  pageNum.value = newNum
}

// Fetch data function
const fetchResultListData = () => {
  // API Call for previus result list
  leagueResultServices
    .getPageList('thai', pageNum.value, pageSize.value)
    .then((res) => {
      prevLiveStreamsData.value = res.data
    })
    .catch((err) => console.log(err))
}

// Watch pageNum and pageSize changes and fetch data
watch([pageNum, pageSize], () => {
  fetchResultListData()
})

// ---------------------------------MOUNTED-------------------------------------------
onMounted(() => {
  // API Call for current stream
  leagueResultServices
    .getLatestStream()
    .then((res) => {
      currentLiveData.value = res.data
    })
    .catch((err) => console.log(err))

  // Fetch data on initial mount
  fetchResultListData()
})
</script>

<template>
  <div class="container">
    <CurrentResult
      :name="currentLiveData.name"
      :createTime="currentLiveData.createTime"
      :result="currentLiveData.result"
      :videoUrl="currentLiveData.videoUrl"
    >
    </CurrentResult>
    <PrevResults :records="prevLiveStreamsData.records"></PrevResults>
    <Pagination
      :current="prevLiveStreamsData.current"
      :pages="prevLiveStreamsData.pages"
      :size="prevLiveStreamsData.size"
      :total="prevLiveStreamsData.total"
      @changePageSize="handleChangePageSize"
      @changePageNum="handleChangePageNum"
    ></Pagination>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.container {
  // border: solid 1px rgb(255, 255, 255);
  width: 100%;
  padding: 0;
  margin-top: 1rem;
}
</style>
