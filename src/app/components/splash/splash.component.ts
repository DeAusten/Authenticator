import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'splash',
  templateUrl: 'app/components/splash/splash.component.html'
})

export class SplashComponent implements OnInit {

    constructor(private router: Router) { 
        
    }
    
    ngOnInit() {

    }    
}
