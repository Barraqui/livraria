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
            path: '/cadastro',
            name: 'Cadastro',
            component: () => import('@/layout/cadastro/index.jsx')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/layout/primeiraPag/index.jsx')
        },
        {
            path: '/dadosPessoais',
            name: 'Dados',
            component: () => import('@/layout/dadosPessoais/index.jsx')
        },
        {
            path: '/paginaLivros',
            name: 'Livros',
            component: () => import('@/layout/paginaLivros/index.jsx')
        },
        {
            path: '/endereco',
            name: 'Endereco',
            component: () => import('@/layout/endereco/index.jsx')
        },
        {
            path: '/favoritos',
            name: 'Favorito',
            component: () => import('@/layout/favoritos/index.jsx')
        },
        {
            path: '/maisVendidos',
            name: 'Mais Vendidos',
            component: () => import('@/layout/maisVendidos/index.jsx')
        },
        {
            path: '/lancamentos',
            name: 'Lançamentos',
            component: () => import('@/layout/lancamentos/index.jsx')
        }
    ]
});

export default router;
