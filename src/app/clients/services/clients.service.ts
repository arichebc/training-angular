import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorHandler } from 'src/app/core/abstracts/error-handler';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

/**
 * @description
 * this class is used to managed clients collection with HttpClient
 */
@Injectable({
  providedIn: 'root',
})
export class ClientsService extends ErrorHandler {
  /**
   * private collection property Observable
   */
  private collection$: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    super();
    this.collection$ = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  /**
   * get collection
   */
  public get collection(): Observable<Client[]> {
    return this.collection$;
  }

  /**
   * @function
   * change state item
   */
  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client(item);
    obj.state = state;
    return this.update(obj);
  }

  /**
   * @function
   * update item in collection
   */
  public update(item: Client): Observable<Client> {
    return this.http
      .put<Client>(`${this.urlApi}/clients/${item.id}`, item)
      .pipe(catchError(this.handleError));
  }

  /**
   * @function
   * add item in collection
   */
  public add(item: Client): Observable<Client> {
    return this.http
      .post<Client>(`${this.urlApi}/clients`, item)
      .pipe(catchError(this.handleError));
  }

  /**
   * @function
   * delete item in collection
   */
  public delete(id: number): Observable<Client> {
    return this.http
      .delete<Client>(`${this.urlApi}/clients/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * @function
   * get item by id
   */
  public getItemById(id: number): Observable<Client> {
    return this.http
      .get<Client>(`${this.urlApi}/clients/${id}`)
      .pipe(catchError(this.handleError));
  }
}
