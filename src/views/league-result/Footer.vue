<script setup>
import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(20)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>
<template>
  <div class="pagination-wrapper">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[20, 30, 40]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.pagination-wrapper {
  position: relative;
  border: solid 1px blue;
  width: 100%;
  margin-top: 2rem;
  overflow-x: scroll;
  padding: 1rem;
  padding-top: 0;

  @include tablet {
    @include flex-centralize;
  }
}
</style>
