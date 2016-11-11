﻿// ====== ./app/app.component.ts ======
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from "./models/user.model";
import { UserService } from "./services/user.service";
import { ProductsService } from "./services/products.service";
import { Subscription }   from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'my-app',
    templateUrl: './templates/app.component.tpl.html',
    styleUrls: ['./templates/app.css'],
    providers: [UserService]
})

// App Component class
export class AppComponent implements OnDestroy, OnInit {
    user: User;
    userSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService) {
        this.userSubscription = userService.userSource$.subscribe(
            user => {
                console.log('User Changed', user);
                this.user = user;
            });
    }
    onLogin(usr: User) {
        usr ? this.user = usr : null;
    }

    ngOnInit() {
        console.log('init app.component');
        console.log(this.user);
        if (this.user === undefined || this.user === null) {
            this.router.navigate(['/']);
        } 
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.userSubscription.unsubscribe();
    }

}