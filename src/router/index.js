import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Publications from '../views/Publications.vue';
import Gallery from '../views/Gallery.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/publications',
    name: 'publications',
    component: Publications
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
