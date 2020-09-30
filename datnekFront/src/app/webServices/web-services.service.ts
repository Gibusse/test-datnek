import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebServicesService {

  API = environment;

  constructor(private http: HttpClient) { }

  /**
   * GET METHOD
   * Retrieve list of records from server
   * @param action
   */
  read(action){
    return this.http.get<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}`);
  }

  /**
   * POST METHOD
   * Send list of record to server
   * Can use it for search method with pagination to retrieve list of datas
   * @param action
   * @param data
   */
  create(action, data){
    return this.http.post<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}`, data);
  }

  /**
   * PUT METHOD
   * This method update a record by id
   * @param action
   * @param data
   * @param id
   */
  update(action, data, id){
    return this.http.put<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}/${id}`, data);
  }

  /**
   * PATCH METHOD
   * This method update part of record by id
   * @param action
   * @param data
   * @param id
   */
  patching(action, data, id) {
    return this.http.patch<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}/${id}`, data);
  }

  /**
   * GET METHOD
   * This method retrieve multiple records by id
   * @param action
   * @param id
   */
  findAll(action, id){
    return this.http.get<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}/${id}`);
  }

  /**
   * GET METHOD
   * This method retrieve record by id
   * @param action
   * @param id
   */
  findOne(action, id){
    return this.http.get<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}/${id}`);
  }

  /**
   * DELETE METHOD
   * This method delete a record by id
   * @param action
   * @param id
   */
  deleteOne(action, id){
    return this.http.delete<any>(`${this.API.url}${this.API.port}${this.API.api}/${action}`, id);
  }


}
