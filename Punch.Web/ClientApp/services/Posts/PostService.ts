import BaseService from "../BaseService";
import { Post } from "../../models/Posts/Post";

class PostService extends BaseService<Post> {
  constructor() {
    super('posts');
  }

  public createObject(item) {
    return new Post(item);
  }

  public mapToServer(item: Post) : any {
    return this.createObject(item).mapToServerObject();
  };
}

export default new PostService();