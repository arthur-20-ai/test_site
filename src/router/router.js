import { createRouter, createWebHistory } from 'vue-router';
import Acceuil from '@/views/AcceuilPage.vue';
import Contact from '@/views/ContactPage.vue';
import Partenaire from '@/views/PartenairePage.vue';
import QuiSommesNous from '@/views/QuiSommesNousPage.vue';
import Services from '@/views/ServicesPage.vue';
import PesageStatique from '@/views/PesageStatique.vue';
import PesageDynamique from '@/views/PesageDynamique.vue';
import Prestations from '@/views/PrestationsPage.vue';
import Metrologie from '@/views/MetrologiePage.vue';
import MentionLegal from '@/views/MentionLegal.vue';
import Humidimetre from '@/views/HumidimetrePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
          path: '/',
          name: 'AcceuilPage',
          component: Acceuil,
        },
        {
            path: '/Contact',
            name: 'ContactPage',
            component: Contact,
        },
        {
            path: '/Partenaire',
            name: 'PartenairePage',
            component: Partenaire,
        },
        {
            path: '/QuiSommesNous',
            name: 'QuiSommesNousPage',
            component: QuiSommesNous,
        },
        {
            path: '/Services',
            name: 'ServicesPage',
            component: Services,
        },
        {
            path: '/PesageStatique',
            name: 'PesageStatique',
            component: PesageStatique
        },
        {
            path: '/PesageDynamique',
            name: 'PesageDynamique',
            component: PesageDynamique
        },
        {
            path: '/MentionLegal',
            name: 'MentionLegal',
            component: MentionLegal
        },
        {
            path: '/Humidimetre',
            name: 'HumidimetrePage',
            component: Humidimetre
        },
        {
            path: '/Metrologie',
            name: 'MetrologiePage',
            component: Metrologie
        },
        {
            path: '/Prestations',
            name: 'PrestationsPage',
            component: Prestations
        }
    ],

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        }
        return { top: 0 };
      },
});

export default router;