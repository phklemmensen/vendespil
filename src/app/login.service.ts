import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

//
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
  })
};

const headers = new HttpHeaders({
  'Content-Type':  'application/json',
  'Authorization': 'my-auth-token',
});

@Injectable()
export class LoginService {

  loginUrl = 'https://us-central1-fe-workshop-april-2018.cloudfunctions.net/login';
  //kssLoginUrl = 'http://kennethstrauss.dk/webapi_getgametoken.php?GameKey=BeWHEELdering';

  constructor(private http: HttpClient) { }

  postLogin(user: User): Observable<string> {
    return this.http.post(this.loginUrl, user, {responseType: 'text', headers})
      .pipe(
//        catchError(this.handleError('postLogin'))
      );
  }

  private handleError(error: HttpErrorResponse): ErrorObservable {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  } 
}
