<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const input = ref()
const { t } = useI18n()
</script>

<template>
  <main>
    <h1>{{ t('home.header') }}</h1>
    <p>{{ t('home.created_by') }}</p>
    <p>This page has been visited 30 times.</p>
    <el-button type="primary" class="scss">I am ElButton</el-button>
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
    <el-button-group>
      <el-button>btn1</el-button>
      <el-button>btn1</el-button>
      <el-button>btn2</el-button>
    </el-button-group>
    <el-input v-model="input" class="custom-input" placeholder="Custom Styled Input" />
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';
main {
  background: $primary-color;
}
.el-input {
  background: red;
}
.custom-input {
  background-color: #f5f5f5; /* Background color */
  border: 2px solid #3498db; /* Border color */
  color: #333; /* Text color */
  width: 100px;
}
</style>
