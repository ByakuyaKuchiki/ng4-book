import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { IUser } from '../interfaces/user.interface';
import { MOCKUSER } from '../interfaces/users.mock';

@Injectable()
export class UserRestService {

  constructor() { }

  getMockUsers(): Observable<IUser[]> {
    return of(MOCKUSER);
  }

}
