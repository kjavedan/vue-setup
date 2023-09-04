<script>
import { useI18n } from 'vue-i18n'
export default {
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<template>
  <main>
    <h1>{{ t('home.header') }}</h1>
    <p>{{ t('home.created_by') }}</p>
    <p>This page has been visited 30 times.</p>
    <el-button>I am ElButton</el-button>
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';
main {
  background: $primary-color;
}
</style>
