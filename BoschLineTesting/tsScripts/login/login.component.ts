// ====== ./app/Dogs/login.component.ts ======

// Import component decorator
import { Component , EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

@Component({
    templateUrl: 'templates/login/login.tpl.html',
    styleUrls: ['templates/login/login.css'],
})

// Component class
export class LoginComponent {
    private login;
    private password;
    @Output() loggedIn = new EventEmitter<User>();
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService) { }

    onSubmit(f: NgForm) {
        // TODO Get user by credentials and emit user changed
        let u = new User({
            user_id: 1,
            nt_username: this.login

        });
        // this.userService.userChanged(u);
        
        // console.log(f.value);  // { first: '', last: '' }
        // console.log(f.valid);  // false
        this.router.navigate(['/dash']);
    }
}

