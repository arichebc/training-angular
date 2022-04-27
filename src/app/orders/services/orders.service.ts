import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
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
  private collection$: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    super();
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  /**
   * get collection
   */
  public get collection(): Observable<Order[]> {
    return this.collection$;
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
  public delete(id: number): Observable<Order> {
    return this.http
      .delete<Order>(`${this.urlApi}/orders/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * @function
   * get item by id
   */
  public getItemById(id: number): Observable<Order> {
    return this.http
      .get<Order>(`${this.urlApi}/orders/${id}`)
      .pipe(catchError(this.handleError));
  }

  public getItemsBySearch(expression: string): Observable<Order[]> {
    const lowerExpression = expression.toLowerCase();
    console.log(lowerExpression);
    return this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      tap((data) => {
        console.log(
          data.filter((item) =>
            item.client.toLowerCase().includes(lowerExpression)
          )
        );
      }),
      map((data) =>
        data.filter((item) =>
          item.client.toLowerCase().includes(lowerExpression)
        )
      )
    );
  }
}
