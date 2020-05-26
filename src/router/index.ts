import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { routes } from "@/router/routes";
// import { _import } from "@/router/util_router";
import UserInterceptor from "./guards/auth";
import RoleInterceptor from "./guards/role";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes()
});

// router.beforeEach(UserInterceptor);
// router.beforeEach(RoleInterceptor);

export default router;
