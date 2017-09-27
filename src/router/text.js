import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import next from '~/next'
import text from '~/text'
import axios from 'axios'

Vue.use(Router)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      alias: '/index',
      component: Hello
    },
    {
      path: '/',
      name: 'next',
      alias: '/next',
      component: next
    }
})
