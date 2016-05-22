import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { SignIn } from '../../models/signin';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'signin',
  templateUrl: 'app/components/signin/signin.component.html',
  providers: [AuthenticationService]
})

export class SignInComponent implements OnInit {

    username: string = '';
    password: string = '';
    
    signInForm: SignIn = {
        username: this.username,
        password: this.password
    }

    constructor(private router: Router, private authService: AuthenticationService) { 
        
    }
    
    ngOnInit() {

    }
    
    signIn() {      
        this.authService.signIn(this.signInForm);
    }
    
    getAllUSers() {
        this.authService.getAllUsers();
    }
    
}
