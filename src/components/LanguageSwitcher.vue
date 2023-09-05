<template>
  <el-select @change="switchLanguage" v-model="locale" class="el-select">
    <el-option v-for="sLocale in supportedLocales" :key="sLocale" :value="sLocale" :label="sLocale">
      {{ sLocale }}
    </el-option>
  </el-select>
</template>

<script>
import { useI18n } from 'vue-i18n'
import Trans from '@/i18n/translation'

export default {
  setup() {
    const { t, locale } = useI18n()
    const supportedLocales = Trans.supportedLocales

    const switchLanguage = async (newLocale) => {
      // setLocale(newLocale)
      Trans.switchLanguage(newLocale)
    }

    return { t, locale, supportedLocales, switchLanguage }
  }
}
</script>

<style scoped lang="scss"></style>
