import BaseService from "../BaseService";
import { Tag } from "../../models/Tag/Tag";

class TagService extends BaseService<Tag> {
  constructor() {
    super('tags');
  }

  public createObject(item) {
    return new Tag(item);
  }

  public mapToServer(item: Tag) : any {
    return this.createObject(item).mapToServerObject();
  };
}

export default new TagService();