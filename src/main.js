import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store/index'
import axios from 'axios'
import Vuelidate from 'vuelidate'

axios.defaults.baseURL = 'https://odin-library-project-vue.firebaseio.com/'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
