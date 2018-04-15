import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import routes from '../../menu';

@Component
export default class NavmenuComponent extends Vue {
  private routes: any[] = [];
  mounted() {
    this.routes = routes;
  }


  shouldShow(route) {
    var shouldShow = true;
    // TODO: check if should show menuitem

    if (route.meta.hideMenu) {
      shouldShow = false;
    } 
    return shouldShow;
  }

  logoff() {
    this.$router.push('/login');
  }
}
