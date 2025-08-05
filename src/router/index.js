import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/:projectSlug',
    name: 'MainWithProject',
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
