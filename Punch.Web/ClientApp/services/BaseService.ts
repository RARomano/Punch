import axios from 'axios';
import Promise from 'bluebird';
import IBaseModel from '../models/IBaseModel';

abstract class BaseService<T extends IBaseModel> {

  private apiName: string;

  constructor(apiName: string) {
    this.apiName = apiName;
  }

  public abstract mapToServer(item: T) : any;
  public abstract createObject(data: any) : T;

  public getConfigHeaders() : any {
    return {
      headers: {
        'Punch': 'Web'
      }
    };
  }

  public getAll(): Promise<T[]> {
    return axios.get(`/api/${this.apiName}/all`, this.getConfigHeaders())
      .then(response => response.data.map(this.createObject));
  }

  public getById(id: any): Promise<T> {
    return axios.get(`/api/${this.apiName}/get/${id}`, this.getConfigHeaders())
      .then(response => this.createObject(response.data));
  }

  public addNew(item: T): Promise<any> {
    const serverData = this.mapToServer(item);
    return new Promise((resolve, reject) => {
      axios.post(`/api/${this.apiName}/create`, serverData, this.getConfigHeaders())
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public updateExisting(item: T): Promise<any> {
    const serverData = this.mapToServer(item);
    return new Promise((resolve, reject) => {
      axios.post(`/api/${this.apiName}/update`, serverData, this.getConfigHeaders())
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  }

  public delete(item: T): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/${this.apiName}/delete/${item.id}`, this.getConfigHeaders())
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  }

  public getAPIName(): string {
    return this.apiName;
  }
}

export default BaseService;