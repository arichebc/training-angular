import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  /**
   * private collection property Observable
   */
  private collection$!: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }
  /**
   * get collection
   */
  public get collection(): Observable<Client[]> {
    return this.collection$;
  }

  /**
   * set collection
   */
  public set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }

  /**
   * @function
   * change state item
   */

  /**
   * @function
   * update item in collection
   */

  /**
   * @function
   * add item in collection
   */

  /**
   * @function
   * delete item in collection
   */

  /**
   * @function
   * get item by id
   */
}
