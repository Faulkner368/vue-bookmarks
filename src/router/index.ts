import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Bookmarks from "@/pages/Bookmarks.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Bookmarks",
    component: Bookmarks
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    component: Bookmarks
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
