import Vue from 'vue'
import App from './App.vue'
import PrismicVue from 'prismic-vue'
import PrismicConfing from './prismic/prismic.config'
import linkResolver from './prismic/link-resolver'
import router from './router'
import importComponents from '@c0nst4ntin/vue-component-importer'

Vue.config.productionTip = false

Vue.use(PrismicVue,{
  endpoint: PrismicConfing.apiEndpoint,
  linkResolver
})

let components = require.context('@/components/slices', true, /[a-zA-Z]\w+\.(vue)$/)
importComponents(Vue, components)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
