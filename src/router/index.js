import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/index.html',
    name: 'home',
    component: HomeView
  },
  {
    path: '/index.html :queryParams(.*)',
    name: 'query',
    component: HomeView,
    props: true
  }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
