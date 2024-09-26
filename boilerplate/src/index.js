import './assets/tailwind.css'

import CompositionAPI from '@vue/composition-api'
import Vue from 'vue'

import App from './app.vue'

Vue.use(CompositionAPI)

Vue.config.productionTip = false

const app = new Vue({
  render: (h) => h(App),
})

app.$mount('#root')
