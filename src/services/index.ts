import axios from "axios";

class Services {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async get(resource: string, params?: {[index: string]: any}) {

    if(params && params.headers){
      console.log(params);
    }


    const response = await axios.get(this.url + resource, params);
    return response;
  }

  async getAll(resource: string, data: any) {
    const response = await axios.get(this.url + resource, data);
    return response;
  }

  async post(resource: string, data: any, config?: {[index: string]: any}) {
    const response = await axios.post(this.url + resource, data, config);
    return response;
  }

  async customEndpointPost(url: string, data: any, config?: {[index: string]: any}) {
    const response = await axios.post(url, data, config);
    return response;
  }

  async put(resource: string, data: any, headers?: any) {
    const response = await axios.put(this.url + resource, data, {headers});
    return response;
  }

  async delete(resource: string) {
    const response = await axios.delete(this.url + resource);
    return response;
  }

  errorHandler() {
    console.log("Not implemented");
  }
}

export const ApiService = new Services("http://localhost:8080/api/");
export const serverURL = "http://localhost:8080/api/";
