import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages: {
      en: {},
      es: {},
      pt: {},
      pt_br: {},
      fr: {}
    }
  })
}
