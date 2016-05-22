import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'about',
  templateUrl: 'app/components/about/about.component.html'
})

export class AboutComponent implements OnInit {

    constructor(private router: Router) { 
        
    }
    
    ngOnInit() {

    }    
}
