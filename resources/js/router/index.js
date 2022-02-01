import {createWebHistory, createRouter} from "vue-router";

import Test from '../components/Test';

export const routes = [
    {
        name: 'test',
        path: '/test',
        component: Test
    },
  
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;