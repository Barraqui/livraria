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
        {
            path: '/dadosPessoais',
            name: 'Dados',
            component: () => import('@/layout/dadosPessoais/index.jsx')
        },
        {
            path: '/endereco',
            name: 'Endereco',
            component: () => import('@/layout/endereco/index.jsx')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/layout/primeiraPag/index.jsx')
        },
        {
            path: '/cadastro',
            name: 'Cadastro',
            component: () => import('@/layout/cadastro/index.jsx')
        }
    ]
});

export default router;
