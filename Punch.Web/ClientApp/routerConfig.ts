import VueRouter, { Route, NavigationGuard, RawLocation } from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export default class RouterConfig {
  private vueRouter: VueRouter;

  private routes: any[];

  constructor() {
    this.routes = [
      { path: '/', component: require('./components/home/home.vue.html') },
      { path: '/counter', component: require('./components/counter/counter.vue.html') },
      { path: '/admin/posts', component: require('./components/admin/posts/list.vue.html') },
      { path: '/admin/categories', component: require('./components/admin/categories/list.vue.html') },
      { path: '/admin/tags', component: require('./components/admin/tags/list.vue.html') },
      { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') }
    ];

    this.vueRouter = new VueRouter({ mode: 'history', routes: this.routes });

    this.vueRouter.beforeEach((to, from, next) => this.protectRoutes(to, from, next));
  }

  private protectRoutes(to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) {
    if (to.path.indexOf('/admin') >= 0 && !this.currentUserIsAdmin()) {
      next('/login');
    } else {
      next();
    }
  }

  private currentUserIsAdmin(): boolean {
    return true;
  }

  public getRouter(): VueRouter {
    return this.vueRouter;
  }
}