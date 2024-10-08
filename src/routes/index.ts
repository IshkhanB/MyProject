import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import MyPage from '#root/pages/MyPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/my', component: MyPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}