import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { SignIn } from '../models/signin';

@Injectable()
export class AuthenticationService { 
    
    private apiUrl = 'http://anakin.azurewebsites.net/account/';
    
    constructor(private http: Http) { }
    
    signIn(signIn: SignIn) : Promise<SignIn> {
        
        var data = "username=" + encodeURIComponent(signIn.username) +
            "&password=" + encodeURIComponent(signIn.password) +
            "&grant_type=" + encodeURIComponent('password') +
            "&client_id=" + encodeURIComponent('Mav_Dev');   
        
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    
        return this.http
               .post(this.apiUrl + 'token', data, {headers: headers})
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);          
    }
    
    getAllUsers() {
        return this.http
                .get(this.apiUrl + 'users')
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }
    
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }
    
}