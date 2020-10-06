import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API = environment;

  constructor(private http: HttpClient) { }

  /**
   * POST METHOD
   * Register or login a user
   * @param action
   * @param data
   */
  login(action, data): Observable<any>{
    return this.http.post<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}`, data);
  }

  /**
   * GET METHOD
   * Retrieve user information
   * @param id
   */
  getUserInfo(id): Observable<any>{
    return this.http.get<any>(`${this.API.url}${this.API.port}${this.API.api}/getUser/${id}`);
  }


  loggedIn() {
    return !!localStorage.getItem('token');
  }


  getToken() {
    return localStorage.getItem('token');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
}
