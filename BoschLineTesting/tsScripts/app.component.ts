// ====== ./app/app.component.ts ======
import {Component, View, CORE_DIRECTIVES} from '@angular2/angular2'

@Component({
    selector: 'my-app',
    templateUrl: './templates/app.component.tpl.html',
    styleUrls: ['./templates/app.css']
    // Not necessary as we have provided directives using
    // `RouterModule` to root module
    // Tell component to use router directives
    // directives: [ROUTER_DIRECTIVES]
})

// App Component class
export class AppComponent { }