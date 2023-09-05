<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
export default {
  components: { LanguageSwitcher }
}
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">{{ $t('nav.home') }}</RouterLink>
      </li>

      <li>
        <RouterLink to="/about">{{ $t('nav.about') }}</RouterLink>
      </li>
    </ul>
    <el-button>{{ $t('nav.home') }}</el-button>
  </nav>
  <LanguageSwitcher></LanguageSwitcher>
</template>

<style></style>
