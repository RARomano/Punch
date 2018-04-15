import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import serviceFactory from '../../factories/ServiceFactory';

@Component
export default class ListTemplateComponent extends Vue {
  private items: any[] = [];

  @Prop()
  public name!: string;

  @Prop()
  public editUrl!: string;

  @Prop()
  public newUrl!: string;

  @Prop()
  public serviceName!: string;

  @Prop()
  public translationSection!: string;


  mounted() {
    this.fetchData();
  }

  fetchData() {
    const service = serviceFactory.getServiceByName(this.serviceName);
    if (service != null) {
      service.getAll().then((items) => {
        this.items = items;
      });
    }
  }

  openItem(event) {
    if (event.target.tagName !== 'A' && this.editUrl) {
      const id = event.target.closest('tr').dataset.id;
      this.$router.push(this.editUrl + id);
    }
  }
}
