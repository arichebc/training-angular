import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ErrorHandler } from 'src/app/core/abstracts/error-handler';
import { User } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignInService extends ErrorHandler {
  public token$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >('');
  public user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );

  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  public signIn(credentials: any): Observable<any> {
    return this.http
      .post<any>(`${environment.urlApi}/signin`, credentials)
      .pipe(
        tap((data) => {
          const user = {
            id: data.user.id,
            email: data.user.email,
            firstname: data.user.firstname,
            lastname: data.user.lastname,
          };
          // save user and faketoken dans local storage
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', JSON.stringify(data.accessToken));
          this.token$.next(data.accessToken);
          this.user$.next(new User(user));
          this.router.navigate(['orders']);
        })
      );
  }

  public signOut(): void {
    // vider user du localStorage
    // vider token du localStorage
    // vider User$ et token$ dans UsersService et AuthService
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.token$.next(null);
    this.user$.next(null);
    this.router.navigate(['sign-in']);
  }

  public signUp(item: any): Observable<any> {
    return this.http.post(`${environment.urlApi}/register`, item);
  }
}
