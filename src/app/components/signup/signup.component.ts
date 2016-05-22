import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { SignUp } from '../../models/signup';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'signup',
  templateUrl: 'app/components/signup/signup.component.html',
})

export class SignUpComponent implements OnInit {
  
    username: string = '';
    password: string = '';
    confirm: string = '';
    email: string = '';
    birthday: Date;
    firstName: string = '';
    middleName: string = '';
    lastName: string = '';
    phoneNumber: number;
    
    signUpForm: SignUp = {
      username: this.username,
      email: this.email,
      password: this.password,
      confirm: this.confirm,
      birthday: this.birthday,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
    }
    
    constructor(private router: Router) { 
        
    }
    
    ngOnInit() {

    }
    
}
