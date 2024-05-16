import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Cursos from '../pages/Cursos.vue'
// import MaisServicos from '../pages/MaisServicos.vue'
// import Blog from '../pages/Blog.vue'
// import SobreNos from '../pages/SobreNos.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/01101000011011110110111001100101',
    name: 'home',
    component: Home
  },
  {
    path: '/0110001101110101011100100111001101110111',
    name: 'cursos',
    component: Cursos
  },
//   {
//     path: '/mais-servicos',
//     name: 'mais-servicos',
//     component: MaisServicos
//   },
//   {
//     path: '/blog',
//     name: 'blog',
//     component: Blog
//   },
//   {
//     path: '/sobre-nos',
//     name: 'sobre-nos',
//     component: SobreNos
//   }
]

const router = new VueRouter({
  history: true,
  routes
});

export default router