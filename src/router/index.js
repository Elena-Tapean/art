import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Game_One from '../views/Game_One.vue';
import Game_Two from '../views/Game_Two.vue';
import Game_Three from '../views/Game_Three.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Page404 from '../views/Page404.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game_one',
    name: 'game_one',
    component: Game_One
  },
  {
    path: '/game_two',
    name: 'game_two',
    component: Game_Two
  },
  {
    path: '/game_three',
    name: 'game_three',
    component: Game_Three
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
    path: '*',
    name: 'page404',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
