import {Observable} from "rxjs";

export interface Crud {
  getAll(): Observable<any>;

  add(record): Observable<any>;

  update(record, id): Observable<any>;

  delete(id): Observable<any>;

  getSingle(id): Observable<any>;
}
