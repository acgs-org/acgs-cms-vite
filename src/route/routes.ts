import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../layout/BasicLayout.vue")
  },
  {
    path: "/login",
    component: () => import("../view/Login.vue")
  }
];
