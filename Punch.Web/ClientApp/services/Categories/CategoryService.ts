import BaseService from "../BaseService";
import { Category } from "../../models/Category/Category";

class CategoryService extends BaseService<Category> {
  constructor() {
    super('categories');
  }

  public createObject(item) {
    return new Category(item);
  }

  public mapToServer(item: Category) : any {
    return this.createObject(item).mapToServerObject();
  };
}

export default new CategoryService();