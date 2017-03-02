// ====== ./dashboard/settings/UsersList/usersList.component.ts ======
import { User } from "../../../models/user.model";
import { Component, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { List } from 'immutable'; 

@Component({
    templateUrl: 'templates/dashboard/settings/UsersList/usersList.tpl.html',
    styleUrls: ['templates/dashboard/settings/UsersList/usersList.css'],
    selector: 'users-list'
})

// Component class
export class UsersListComponent implements OnInit {
    users: List<User>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private el: ElementRef,
        private userService: UserService ) {

    	// this.userService.users.subscribe(
     //        res => {
     //            this.users = res;
     //        },
     //        err => console.log("Error retrieving Products")
     //    )
    }

    ngOnInit() {
        this.userService.loadInitialData();
    }

}

