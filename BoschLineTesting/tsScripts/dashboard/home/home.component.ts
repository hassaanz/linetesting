// ====== ./dashboard/home/home.component.ts ======

import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'templates/dashboard/home/home.tpl.html',
    styleUrls: ['templates/dashboard/home/home.css']
})

// Component class
export class HomeComponent {
    private login;
    private password;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }
}

