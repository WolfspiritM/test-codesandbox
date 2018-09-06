import Vue, { VueConstructor } from "vue";
import Router, { RouteConfig } from "vue-router";
import Main from "@/pages/Main.vue";
import Container from "@/pages/Container.vue";

Vue.use(Router);

function lazyLoad(component: VueConstructor<Vue>) {
  return new Promise<VueConstructor<Vue>>((res, rej) => {
    setTimeout(() => {
      res(component);
    }, 1200);
  });
}

const settingsRoutes: RouteConfig[] = [
  {
    path: "consumableSettings",
    name: "consumableSettings",
    component: () => import("@/pages/settings/ConsumableSettings.vue")
  },
  {
    path: "soundSettings",
    name: "soundSettings",
    component: () => import("@/pages/settings/SoundSettings.vue")
  },
  {
    path: "timerSettings",
    name: "timerSettings",
    component: () => import("@/pages/settings/TimerSettings.vue")
  },
  {
    path: "tokenSettings",
    name: "tokenSettings",
    component: () => import("@/pages/settings/TokenSettings.vue")
  },
  {
    path: "wifiSettings",
    name: "wifiSettings",
    component: () => import("@/pages/settings/WifiSettings.vue")
  }
];

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", redirect: "/main/home" },
    {
      path: "/",
      name: "container",
      component: Container,
      children: [
        {
          path: "/main/:tab",
          name: "main",
          component: Main,
          children: [
            {
              path: "zoneConfig",
              name: "zoneConfig",
              component: () => import("@/pages/zones/ZonesConfiguration.vue")
            },
            {
              path: "gotoConfig",
              name: "gotoConfig",
              component: () => import("@/pages/zones/GotoConfiguration.vue")
            },
            ...settingsRoutes
          ]
        }
      ]
    }
  ]
});
