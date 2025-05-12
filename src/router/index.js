import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import AdaptableAuras from '@/views/AdaptableAuras.vue';
import DigitalDataCollection from '@/views/DigitalDataCollection.vue';
import FaceOfMedia from '@/views/FaceOfMedia.vue';
import LanguageOfMovement from '@/views/LanguageOfMovement.vue';
import WhereThePiecesCameFrom from '@/views/WhereThePiecesCameFrom.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/project/adaptable-auras',
    name: 'AdaptableAuras',
    component: AdaptableAuras,
  },
  {
    path: '/project/digital-data-collection',
    name: 'DigitalDataCollection',
    component: DigitalDataCollection,
  },
  {
    path: '/project/the-face-of-media',
    name: 'FaceOfMedia',
    component: FaceOfMedia,
  },
  {
    path: '/project/language-of-movement',
    name: 'LanguageOfMovement',
    component: LanguageOfMovement,
  },
  {
    path: '/project/where-the-pieces-came-from',
    name: 'WhereThePiecesCameFrom',
    component: WhereThePiecesCameFrom,
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
