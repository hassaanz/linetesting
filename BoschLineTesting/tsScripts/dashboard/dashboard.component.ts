// ====== ./dashboard/dashboard.component.ts ======

import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'templates/dashboard/dashboard.tpl.html',
    styleUrls: ['templates/dashboard/dashboard.css']
})

// Component class
export class DashboardComponent {
    private login;
    private password;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }
}

