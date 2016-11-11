// ====== ./sidenav/sidenav.component.ts ======

// Import component decorator
import { Component, Input, ViewChild, Renderer } from '@angular/core';

@Component({
    templateUrl: 'templates/sidenav/sidenav.tpl.html',
    styleUrls: ['templates/sidenav/sidenav.css'],
    selector: 'bsh-sidebar',
})

// Component class
export class SideNavComponent {
    @ViewChild('left') left;

    closeBar() {
        console.log('Closing sidemenu');
        this.left.close()
        .catch( (err) => {
            console.log(err);
        })
    }
}