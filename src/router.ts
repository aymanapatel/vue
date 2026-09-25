import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Assignment1 from './components/Assignment1-Directives.vue'
import Assignment2Options from './components/Assignment2-Events-Options-API.vue'
import Assignment2Composition from './components/Assignment2-Events-CompositionAPI.vue'
import Assignment3 from './components/Assignment3-watch-computer.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/directives' },
  { path: '/directives', component: Assignment1 },
  { path: '/events/options', component: Assignment2Options },
  { path: '/events/composition', component: Assignment2Composition },
  { path: '/watch-computed', component: Assignment3 },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
