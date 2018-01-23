import { Component, ReflectiveInjector } from '@angular/core';

import { UserService } from "../services/user/user.service";

@Component({
  selector: 'user-injector',
  templateUrl: './user.injector.component.html',
  styleUrls: ['./user.injector.component.css']
})
export class UserInjectorComponent {

  userName: string;
  userServive: UserService;


  constructor() {
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

    this.userServive = injector.get(UserService);
   }
  
   signIn():void {
    this.userServive.setUser({
      name: 'Nate Murray'
    });

    this.userName = this.userServive.getUser().name;

    console.log('Username is: ', this.userName);
   }

}
