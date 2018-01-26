import { Component, OnInit, AfterViewInit } from '@angular/core';

import { UserRestService } from '../services/user/user-rest.service';
import { IUser } from '../services/interfaces/user.interface';

@Component({
  selector: 'app-user-rest',
  templateUrl: './user-rest.component.html',
  styleUrls: ['./user-rest.component.css']
})
export class UserRestComponent implements OnInit, AfterViewInit {

  users: IUser[];

  constructor(private userServ: UserRestService) { }

  ngOnInit() {
    this.getMockUsers();
  }

  getMockUsers(): void {
    this.userServ.getMockUsers()
                  .subscribe(users => this.users = users);
  }

  ngAfterViewInit(): void {
    $('.card').click(function() {
      $(this).toggleClass('flipped');
    });
  }

}
