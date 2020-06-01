import Home from "@/views/pages/Home.vue";
import Login from "@/views/pages/Login.vue";
import { RoleAccessLevel } from "@/types/auth";
import { i18n_t } from "@/hooks/locales/useLocale";
import { CustomRouteConfig } from "@/types/router";
const routes = (): Array<CustomRouteConfig> => [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false,
      title: i18n_t("data.menu.login.title"),
      pageTitle: i18n_t("data.menu.login.pageTitle")
    }
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
      requiredLevel: RoleAccessLevel.User,
      hidden: false,
      breadcrumb: [{ title: i18n_t("data.menu.home.title"), url: "/" }],
      title: i18n_t("data.menu.home.title"),
      pageTitle: i18n_t("data.menu.home.pageTitle")
    }
  },
  {
    path: "/about",
    name: "about",
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
      title: i18n_t("data.menu.about.title"),
      pageTitle: i18n_t("data.menu.about.pageTitle")
    }
  }
];

export { routes };
