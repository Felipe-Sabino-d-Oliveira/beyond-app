import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login.vue'
import Cadastro from '../pages/Cadastro.vue'
import Home from '../pages/Home.vue'
import Cursos from '../pages/Cursos.vue'

import { getAuth } from 'firebase/auth';

Vue.use(VueRouter);

const authGuard = (to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    // Se o usuário não estiver autenticado, redirecione para a página de login
    next('/');
  } else {
    // Se o usuário estiver autenticado, permita a navegação
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: authGuard,
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: Cursos,
    beforeEnter: authGuard,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;