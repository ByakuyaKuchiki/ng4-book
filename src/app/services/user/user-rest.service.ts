import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { IUser } from '../interfaces/user.interface';
import { MOCKUSER } from '../interfaces/users.mock';
import { MessageService } from '../messages/message.service';

@Injectable()
export class UserRestService {

  private userUrl = 'api/user';  // URL to web api

  constructor(private http: HttpClient, private messageSer: MessageService) { }

  getMockUsers(): Observable<IUser[]> {
    this.messageSer.addMesasge('User service: fetched mock users');
    return of(MOCKUSER);
  }

  private log(message: string) {
    this.messageSer.addMesasge('user service: ' + message);
  }

  getHeroHttp() {
    return this.http
      .get<IUser[]>(this.userUrl)
      .pipe(
      tap(user => this.log(`fetched user`)),
      catchError(this.handleError('getUsers', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };

  }
}
