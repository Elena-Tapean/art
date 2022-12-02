import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Gallery from '../views/Gallery.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Pages from '../views/Pages.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/pages/:id',
    name: 'pages',
    component: Pages
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
