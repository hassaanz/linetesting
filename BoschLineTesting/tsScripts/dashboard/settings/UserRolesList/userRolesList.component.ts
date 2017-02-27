// ====== ./dashboard/settings/UsersList/usersList.component.ts ======

import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'templates/dashboard/settings/UsersList/usersList.tpl.html',
    styleUrls: ['templates/dashboard/settings/UsersList/usersList.css']
})

// Component class
export class UserRolesListComponent {
    
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

}

