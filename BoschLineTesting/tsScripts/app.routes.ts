// ====== ./app/app.routes.ts ======

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './cats/cat-list.component';
import { DogListComponent } from './dogs/dog-list.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound.component';

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
    { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);