// ====== ./app/Dogs/login.component.ts ======

// Import component decorator
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    templateUrl: 'templates/login/login.tpl.html',
    styleUrls: ['templates/login/login.css']
})

// Component class
export class LoginComponent {
    private login;
    private password;

    onSubmit(f: NgForm) {
        console.log(f.value);  // { first: '', last: '' }
        console.log(f.valid);  // false
    }
}

