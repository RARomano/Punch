import IBaseModel from "../IBaseModel";


export class Post implements IBaseModel {
  public id: number = 0;
  private title: string = '';
  private body: string = '';

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.title = data.title;
      this.body = data.body;
    }
  }

  mapToServerObject() {
    return {
      id: this.id,
      title: this.title,
      body: this.body
    }
  }
}