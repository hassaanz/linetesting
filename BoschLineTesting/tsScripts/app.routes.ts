// ====== ./app/app.routes.ts ======

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './cats/cat-list.component';
import { DogListComponent } from './dogs/dog-list.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './dashboard/Products/products.component';
import { ProductDetailsComponent } from './dashboard/Products/productDetails.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { HomeComponent } from './dashboard/home/home.component';

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'cats', component: CatListComponent },
    { path: 'dogs', component: DogListComponent },
    { path: 'dogsabcdefghi', component: CatListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dash', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'products/:id', component:  ProductDetailsComponent },
            { path: 'settings', component: SettingsComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);