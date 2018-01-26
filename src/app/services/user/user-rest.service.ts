import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { IUser } from '../interfaces/user.interface';
import { MOCKUSER } from '../interfaces/users.mock';
import { MessageService } from '../messages/message.service';

@Injectable()
export class UserRestService {

  constructor(private messageSer: MessageService) { }

  getMockUsers(): Observable<IUser[]> {
    this.messageSer.addMesasge('User service: fetched mock users');
    return of(MOCKUSER);
  }

}
