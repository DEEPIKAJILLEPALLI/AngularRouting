import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = new Array<User>();

  constructor(private usersService: UsersService) { }

  public async ngOnInit() {
    this.users = await this.usersService.getUsers();
    console.log(this.users);
  }

}
