import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'signin',
  templateUrl: 'app/components/users/users.component.html',
  providers: [AuthenticationService]
})

export class UsersComponent implements OnInit {
    
    users: User[] = [];

    constructor(private router: Router, private authService: AuthenticationService) { 
        
    }
    
    ngOnInit() {
        this.getAllUsers();
    }
    
    getAllUsers() {
        this.authService.getAllUsers().then(users => this.users = users);
    }
    
}
