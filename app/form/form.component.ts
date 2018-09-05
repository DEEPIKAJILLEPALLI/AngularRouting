import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  public user: User;
  id: FormControl;

  userForm: FormGroup;
  // user: User;
  // id: number = Math.random();
  constructor(private usersService: UsersService) {
    this.userForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required),
      'phoneno': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'website': new FormControl('', Validators.required),
      'street': new FormControl('', Validators.required),
      'suite': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'lat': new FormControl('', Validators.required),
      'lng': new FormControl('', Validators.required),
      'zipcode': new FormControl('', Validators.required),
      'companyname': new FormControl('', Validators.required),
      'catchphrase': new FormControl('', Validators.required),
      'bs': new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
    // console.log(this.userForm);
  }
  onSubmit() {
    if (this.userForm.valid) {
      // console.log('Form Submitted!');
      // // console.log(this.id);
      // console.log(this.userForm);
      this.user = this.userForm.value;
      console.log(this.user);
      this.user.id = 11;
      this.usersService.CreateUser(this.user).subscribe(data => {
        console.log(data);
      });
    } else {
      alert('Invalid data.');
      console.log(this.userForm);

    }
    // here we read infomration from form and
    // make User Model which will be emitted
    // console.log(this.userForm);
    // // tslint:disable-next-line:no-inferrable-types
    // const isValid: boolean = true;



    // if (isValid) {
    //   const user: User = {
    //     id: 0,
    //     name: 'string',
    //     username: 'string',
    //     email: 'string',
    //     phone: 'string',
    //     website: 'string',
    //     address: {
    //       street: 'string',
    //       suite: 'string',
    //       city: 'string',
    //       zipcode: 'string',
    //       geo: {
    //         lat: 9,
    //         lng: 10
    //       }
    //     },
    //     company: {
    //       name: 'string',
    //       catchPhrase: 'string',
    //       bs: 'string'
    //     },
    //   };

    //   this.usersService.CreateUser(user);
    // }
  }

}
