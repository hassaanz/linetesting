/// <reference path="./../node_modules/@types/core-js/index.d.ts"/>
/// <reference path="./../node_modules/@types/hammerjs/index.d.ts"/>

// Imports
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// import { Ng2MaterialModule } from "ng2-material";
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

// Declarations
import { AppComponent } from './app.component';

import { CatListComponent } from './cats/cat-list.component';
import { DogListComponent } from './dogs/dog-list.component';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ProductsComponent } from './dashboard/Products/products.component';
import { ProductCardComponent } from './dashboard/Products/productCard.component';
import { ProductDetailsComponent } from './dashboard/Products/productDetails.component';

import { ObservationListComponent } from './dashboard/Products/Observations/observationList.component';
import { ObservationListItemComponent } from './dashboard/Products/Observations/observationListItem.component';

import { AddObservationDialog } from './dashboard/Products/addObservationDialog.component';

import { SettingsComponent } from './dashboard/settings/settings.component';
import { UsersListComponent } from './dashboard/settings/UsersList/usersList.component';
import { UserRolesListComponent } from './dashboard/settings/UserRolesList/userRolesList.component';
import { HomeComponent } from './dashboard/home/home.component';
// import { SideNavComponent } from './sidenav/sidenav.component';
// import { AutoCompleteFilter } from './autoCompleteFilter/autoCompleteFilter.component';

// Providers
import { UserService } from './services/user.service';
import { UserBackendService } from './services/userBackend.service';
import { ProductsService } from './services/products.service';
import { ProductsBackendService } from './services/productsBackend.service';

import { ProductObservationService } from './services/productObservation.service'; 
import { ProductObservationBackendService } from './services/productObservationBackend.service'; 

import { ProductCategoryService } from './services/productCategory.service';
import { ProductCategoryBackendService } from './services/productCategoryBackend.service';

import { routing } from './app.routes';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        routing,
        Ng2AutoCompleteModule,
        Ng2DatetimePickerModule
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
        AddObservationDialog,
        ProductDetailsComponent,
        ObservationListComponent,
        ObservationListItemComponent,
        SettingsComponent,
        HomeComponent,
        UsersListComponent,
        UserRolesListComponent
    ],
    providers: [
        UserService,
        UserBackendService,
        ProductsService,
        ProductCategoryService,
        ProductsBackendService,
        ProductObservationService,
        ProductCategoryBackendService,
        ProductObservationBackendService,
    ],
    entryComponents: [
        AddObservationDialog
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }