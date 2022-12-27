import {createRouter, createMemoryHistory} from 'vue-router';
import Home from "../page/Home.vue";
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
]
const router = createRouter({
    routes,
    history: createMemoryHistory(),
});
export default router