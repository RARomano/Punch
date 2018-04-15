import IBaseModel from "../IBaseModel";


export class Category implements IBaseModel {
  public id: number = 0;
  private name: string = '';

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
    }
  }

  mapToServerObject() {
    return {
      id: this.id,
      name: this.name
    }
  }
}