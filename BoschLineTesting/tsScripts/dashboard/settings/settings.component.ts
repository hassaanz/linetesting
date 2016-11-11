// ====== ./dashboard/settings/settings.component.ts ======

import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'templates/dashboard/settings/settings.tpl.html',
    styleUrls: ['templates/dashboard/settings/settings.css']
})

// Component class
export class SettingsComponent {
    
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }
}

