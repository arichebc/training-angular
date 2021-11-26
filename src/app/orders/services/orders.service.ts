import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorHandler } from 'src/app/core/abstracts/error-handler';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

/**
 * @description
 * this class is used to managed orders collection with HttpClient
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService extends ErrorHandler {
  /**
   * private collection property Observable
   */
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    super();
    this.collection = this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(catchError(this.handleError));
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
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }
  /**
   * @function
   * update item in collection
   */
  public update(item: Order): Observable<Order> {
    return this.http
      .put<Order>(`${this.urlApi}/orders/${item.id}`, item)
      .pipe(catchError(this.handleError));
  }

  /**
   * @function
   * add item in collection
   */
  public add(item: Order): Observable<Order> {
    return this.http
      .post<Order>(`${this.urlApi}/orders`, item)
      .pipe(catchError(this.handleError));
  }

  /**
   * @function
   * delete item in collection
   */

  /**
   * @function
   * get item by id
   */
}
