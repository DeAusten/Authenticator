import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router-deprecated';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { SplashComponent } from './components/splash/splash.component';
import { SignInComponent } from './components/signin/signin.component';
import { SignUpComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';


@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ],
})

@RouteConfig([
  {
    path: '/splash',
    name: 'Splash',
    component: SplashComponent,
    useAsDefault: true
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignInComponent,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpComponent,
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersComponent,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
  }
])

export class AppComponent implements OnInit {

    appName: string = 'Authenticator';

    constructor(private router: Router) { 
        
    }

    ngOnInit() {
        console.log("Application component initialized.");
    }
}