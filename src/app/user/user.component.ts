import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName: string = 'test';

  constructor() { }

  signIn() {
    console.log(`the user: ${this.userName} is logged`);
  }
}
