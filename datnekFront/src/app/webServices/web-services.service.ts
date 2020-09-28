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
    return this.http.get<any>(`${this.API.url}${this.API.port}`);
  }

  create(table, data){
    return this.http.post<any>(`${this.API.url}${this.API.port}/${table}`, data);
  }

  update(table, data, id){
    return this.http.put<any>(`${this.API.url}${this.API.port}/${table}/${id}`, data);
  }

  findOne(table, id){
    return this.http.get<any>(`${this.API.url}${this.API.port}/${table}/${id}`);
  }

  deleteOne(table, id){
    return this.http.delete<any>(`${this.API.url}${this.API.port}/${table}`, id);
  }


}
