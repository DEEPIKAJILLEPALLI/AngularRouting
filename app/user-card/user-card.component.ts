import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  // public users = new Array<Users>();
  @Input() public user: User;

  constructor() { }

  ngOnInit() {
  }

}
