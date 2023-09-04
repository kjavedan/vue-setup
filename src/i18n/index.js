import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About"
    },
    home: {
      header: "Welcome to the Vue 3 I18n tutorial!",
      created_by: "This tutorial was brought to you by Lokalise."
    },
    about: {
      header: "About us"
    }
  },
  ar: {
    nav: {
      home: "Главная",
      about: "О нас"
    },
    home: {
      header: "Добро пожаловать в руководство Vue 3 I18n!",
      created_by: "Это руководство создано для вас компанией Lokalise."
    },
    about: {
      header: "О нас"
    }
  }
}

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  messages,
  globalInjection: true
})
