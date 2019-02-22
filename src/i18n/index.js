import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh.json'
import en from './en.json'

Vue.use(VueI18n)
const messages = {
  zh,
  en
}
const language = sessionStorage.getItem('language')?sessionStorage.getItem('language'):(/^zh$|^zh-CN$/i.test(navigator.language)) ? 'zh':'en'
sessionStorage.setItem('language',language)
const i18n = new VueI18n({
  locale: language,
  messages
})

window.i18n = i18n

export default i18n
