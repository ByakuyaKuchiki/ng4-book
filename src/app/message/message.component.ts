import { Component, OnInit } from '@angular/core';

import { MessageService } from '../services/messages/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messagesSer: MessageService) { }

  ngOnInit() {
  }

}
