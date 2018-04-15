import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    'list': require('../../list/list.vue.html')
  }
})
export default class CategoriesListComponent extends Vue {
 
}
