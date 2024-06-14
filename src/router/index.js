import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('@/layout'),
            children: [

                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/modules/dashboard')
                }
            ]
        },
        {
            path: '/*',
            name: '404',
            component: () => import('@/modules/404')
        },
    ]
});

export default router;
