import Vue from "vue";
import VueRouter from "./vue_router";
import { routes } from "@/router/routes";
import AuthInterceptor from "./guards/auth";
import RoleInterceptor from "./guards/role";
// import { _import } from "@/router/util_router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes()
});
router.beforeEach(AuthInterceptor);
router.beforeEach(RoleInterceptor);

export default router;
