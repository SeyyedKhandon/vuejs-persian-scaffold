import { RouteConfig } from "vue-router";
import Home from "@/views/pages/Home.vue";
import Login from "@/views/pages/Login.vue";
import { RoleAccessLevel } from "@/router/guards/role";
import { i18n_t } from "@/hooks/locales/useLocale";
import { CustomRouteConfig } from "@/types/router";

export const routes = (): Array<CustomRouteConfig> => [
  {
    path: "/login",
    name: i18n_t("data.menu.login.title"),
    component: Login,
    meta: {
      requiresAuth: false,
      pageTitle: i18n_t("data.menu.login.pageTitle")
    }
  },
  {
    path: "/",
    name: i18n_t("data.menu.home.title"),
    component: Home,
    meta: {
      requiresAuth: true,
      requiredLevel: RoleAccessLevel.User,
      hidden: false,
      breadcrumb: [{ title: i18n_t("data.menu.home.title"), url: "/" }],
      pageTitle: i18n_t("data.menu.home.pageTitle")
    }
  },
  {
    path: "/about",
    name: i18n_t("data.menu.about.title"),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pages/About.vue"),
    meta: {
      requiresAuth: true,
      requiredLevel: RoleAccessLevel.User,
      hidden: false,
      breadcrumb: [{ title: i18n_t("data.menu.about.title"), url: "/about" }],
      pageTitle: i18n_t("data.menu.about.pageTitle")
    }
  }
];
