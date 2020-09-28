import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebServicesService {

  API = environment;

  constructor(private http: HttpClient) { }

  read(){
    return this.http.get<any>(`${this.API.url}${this.API.port}${this.API.api}`);
  }

  create(action, data){
    return this.http.post<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}`, data);
  }
action
  update(action, data, id){
    return this.http.put<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}/${id}`, data);
  }

  findOne(action, id){
    return this.http.get<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}/${id}`);
  }

  deleteOne(action, id){
    return this.http.delete<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}`, id);
  }


}
