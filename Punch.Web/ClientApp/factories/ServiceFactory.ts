import BaseService from "../services/BaseService";
import PostService from "../services/Posts/PostService";
import CategoryService from "../services/Categories/CategoryService";
import TagService from "../services/Tags/TagService";

class ServiceFactory {
  private services: BaseService<any>[];

  constructor() {
    this.services = [
      PostService,
      CategoryService,
      TagService
    ];
  }

  public getServiceByName(name: string): BaseService<any> | null {
    const service = this.services.filter(service => service.getAPIName() == name);
    if (service && service.length) {
      return service[0];
    }

    return null;
  }
}

export default new ServiceFactory();