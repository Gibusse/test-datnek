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

  create(){

  }

  update(){
    
  }

  findOne(){

  }

  deleteOne(){

  }


}
