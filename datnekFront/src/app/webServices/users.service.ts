import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API = environment;

  constructor(private http: HttpClient) { }

  getUserInfo(id) {
    return this.http.get<any>(`${this.API.url}${this.API.port}${this.API.api}/getUser/${id}`);
  }
}
