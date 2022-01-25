import { defineStore } from 'pinia'
import { i18n } from '@/lang'

export const useSwithLocaleStore = defineStore({
  id: 'switchLocale',
  actions: {
    switchLocale () {
      if (i18n.global.locale.value === 'ru-RU') {
        i18n.global.locale.value = 'en-US'
      } else i18n.global.locale.value = 'ru-RU'
    },
  },
})
