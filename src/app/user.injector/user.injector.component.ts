import { Component, ReflectiveInjector, Input } from '@angular/core';

import { UserService } from "../services/user/user.service";

@Component({
  selector: 'user-injector',
  templateUrl: './user.injector.component.html',
  styleUrls: ['./user.injector.component.css']
})
export class UserInjectorComponent {

  @Input() form: any;

  userName: string;
  userServive: UserService;


  constructor() {
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

    this.userServive = injector.get(UserService);
   }
  
   signIn():void {
    this.userServive.setUser(this.form);

    this.userName = this.userServive.getUser().name || 'unknown JSON object';

    console.log('Username is: ', this.userName);
   }

}
