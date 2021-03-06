import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /**
   * private collection
   */
  private collection$: BehaviorSubject<User[]> = new BehaviorSubject([
    new User(),
  ]);
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  public refreshCollection() {
    this.http
      .get<User[]>(this.urlApi + '/users')
      .pipe(
        map((datas) => {
          return datas.map((data) => {
            delete data.password;
            return data;
          });
        }),
        tap((data) => {
          // console.log(data);
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  /**
   * get collection
   */
  public get collection(): Observable<User[]> {
    return this.collection$;
  }

  /**
   * update item in collection
   */
  public update(item: User): Observable<User> {
    return this.http
      .patch<User>(`${this.urlApi}/users/${item.id}`, item)
      .pipe(tap(() => this.refreshCollection()));
  }

  /**
   * add item in collection
   */
  public add(item: User): Observable<any> {
    return this.http
      .post<User>(`${this.urlApi}/register`, item)
      .pipe(tap(() => this.refreshCollection()));
  }

  /**
   * delete item in collection
   */
  public delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.urlApi}/users/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  /**
   * get item by id from collection
   */
  public getItemById(id: number): Observable<User> {
    return this.http.get<User>(`${this.urlApi}/users/${id}`).pipe(
      map((data) => {
        delete data.password;
        return data;
      }),
      tap((data) => console.log(data))
    );
  }

  public getItemsBySearch(expression: string): void {
    const lowerExpression = expression.toLowerCase();
    console.log(lowerExpression);
    this.http
      .get<User[]>(`${this.urlApi}/users`)
      .pipe(
        tap((data) => {
          console.log(
            data.filter((item) =>
              item.lastname.toLowerCase().includes(lowerExpression)
            )
          );
        }),
        map((data) =>
          data.filter((item) =>
            item.lastname.toLowerCase().includes(lowerExpression)
          )
        )
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }
}
