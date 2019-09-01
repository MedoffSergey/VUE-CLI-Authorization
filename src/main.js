import Vue from 'vue'
import App from './App.vue'
import {i} from './learn'

Vue.config.productionTip = false

console.log(App)

new Vue({
  render: h => h(App),
}).$mount('#app')
