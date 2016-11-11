/// <reference path="./../node_modules/@types/core-js/index.d.ts"/>
/// <reference path="./../node_modules/@types/hammerjs/index.d.ts"/>

// Imports
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2MaterialModule } from "ng2-material";

// Declarations
import { AppComponent } from './app.component';
import { CatListComponent } from './cats/cat-list.component';
import { DogListComponent } from './dogs/dog-list.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/Products/products.component';
import { ProductCardComponent } from './dashboard/Products/productCard.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SideNavComponent } from './sidenav/sidenav.component';

// Providers
import { UserService } from './services/user.service'
import { ProductsService } from './services/products.service'

import { routing } from './app.routes';

@NgModule({
    imports: [
        MaterialModule,
        Ng2MaterialModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        routing,
    ],
    declarations: [
        AppComponent,
        CatListComponent,
        DogListComponent,
        LoginComponent,
        PageNotFoundComponent,
        DashboardComponent,
        ProductsComponent,
        ProductCardComponent,
        SettingsComponent,
        HomeComponent,
        SideNavComponent,
    ],
    providers: [UserService, ProductsService],
    bootstrap: [AppComponent]
})
export class AppModule { }