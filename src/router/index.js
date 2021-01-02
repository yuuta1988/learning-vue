import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import home from '@/components/home'
import add from '@/components/add'
import edit from '@/components/edit'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit
    }
  ]
})
