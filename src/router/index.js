import Vue from "vue";
import Router from "vue-router";

import Login from "../pages/core/Login.vue";
import Error from "../pages/core/Error.vue";

import Home from "../pages/dashboard/Home.vue";
import HomeDetail from "../pages/dashboard/HomeDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        breadcrumb: [{ name: "Home" }]
      }
    },
    {
      path: "/account/:type/:id",
      name: "HomeDetail",
      component: HomeDetail,
      props: true,
      meta: {
        breadcrumb: [{ name: "HomeDetail" }]
      }
    }
  ]
});
