/// <reference path="./../node_modules/@types/core-js/index.d.ts"/>
/// <reference path="./../node_modules/@types/hammerjs/index.d.ts"/>

// Imports
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2MaterialModule } from "ng2-material";


// Declarations
import { AppComponent } from './app.component';
import { CatListComponent } from './cats/cat-list.component';
import { DogListComponent } from './dogs/dog-list.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { routing } from './app.routes';

@NgModule({
    imports: [
        MaterialModule,
        Ng2MaterialModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
    ],
    declarations: [
        AppComponent,
        CatListComponent,
        DogListComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }