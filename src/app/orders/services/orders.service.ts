import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

/**
 * @description
 * this class is used to managed orders collection with HttpClient
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  /**
   * private collection property Observable
   */
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }
  /**
   * get collection
   */
  public get collection(): Observable<Order[]> {
    return this.collection$;
  }

  /**
   * set collection
   */
  public set collection(col: Observable<Order[]>) {
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
