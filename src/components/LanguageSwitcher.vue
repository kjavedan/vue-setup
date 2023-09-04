<template>
  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ sLocale }}
    </option>
  </select>
</template>

<script>
import { useI18n } from 'vue-i18n'
import Trans from '@/i18n/translation'

export default {
  setup() {
    const { t, locale } = useI18n()

    const supportedLocales = Trans.supportedLocales

    const switchLanguage = async (event) => {
      const newLocale = event.target.value
      await Trans.switchLanguage(newLocale)
    }
    return { t, locale, supportedLocales, switchLanguage }
  }
}
</script>
