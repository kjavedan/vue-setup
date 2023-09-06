<script setup>
import { ref } from 'vue'
const props = defineProps(['current', 'pages', 'size', 'total'])

const small = ref(false)
const background = ref(true)
const disabled = ref(false)

const emit = defineEmits(['changePageSize', 'changePageNum'])

// Use local refs to store and modify the values
const localSize = ref(props.size ? props.size : 20)
const localCurrent = ref(props.current ? props.current : 1)

const handleChangePageSize = (pageSize) => {
  localSize.value = pageSize
  emit('changePageSize', pageSize)
}

const handleCurrentChange = (val) => {
  localCurrent.value = val
  emit('changePageNum', val)
}
</script>
<template>
  <div class="pagination-wrapper">
    <el-pagination
      v-model:current-page="localCurrent"
      v-model:page-size="localSize"
      :page-sizes="[20, 30, 40]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.total"
      @size-change="handleChangePageSize"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.pagination-wrapper {
  position: relative;
  // border: solid 1px blue;
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
