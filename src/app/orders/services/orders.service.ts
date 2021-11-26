import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap } from 'rxjs';
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
  private collection$: Subject<Order[]> = new Subject<Order[]>();
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    super();
  }
  /**
   * refresh collection
   */
  public refreshCollection(): void {
    this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(catchError(this.handleError))
      .subscribe((data) => this.collection$.next(data));
  }

  /**
   * get collection
   */
  public get collection(): Subject<Order[]> {
    this.refreshCollection();
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
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`).pipe(
      tap(() => this.refreshCollection()),
      catchError(this.handleError)
    );
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
}
