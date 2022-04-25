import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from 'src/app/core/abstracts/error-handler';
import { catchError, Observable, Subject, tap } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService extends ErrorHandler {
  /**
   * private collection property Observable
   */
  private collection$: Subject<Client[]> = new Subject<Client[]>();
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    super();
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }
  /**
   * refresh collection
   */
  public refreshCollection(): void {
    this.http
      .get<Client[]>(`${this.urlApi}/clients`)
      .pipe(catchError(this.handleError))
      .subscribe((data) => this.collection$.next(data));
  }

  /**
   * get collection
   */
  public get collection(): Subject<Client[]> {
    this.refreshCollection();
    return this.collection$;
  }

  /**
   * set collection
   */
  public set collection(col: Observable<Client[]>) {
    // this.collection$ = col;
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
    return this.http.delete<Client>(`${this.urlApi}/clients/${id}`).pipe(
      tap(() => this.refreshCollection()),
      catchError(this.handleError)
    );
  }

  /**
   * @function
   * get item by id
   */
}
