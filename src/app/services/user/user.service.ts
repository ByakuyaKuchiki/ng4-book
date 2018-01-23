import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private user;

  
  setUser(newUser): void {
    this.user = newUser;
  }

  getUser(): any{
    return this.user;
  }

}
