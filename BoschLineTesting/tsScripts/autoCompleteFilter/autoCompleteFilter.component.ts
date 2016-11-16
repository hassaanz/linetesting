// ====== ./dashboard/aotoCompleteFilter/autocompleteFilter.component.ts ======

import { Component, Input, Output , OnInit, EventEmitter } from '@angular/core';
import { Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'templates/dashboard/autoCompleteFilter/autocompleteFilter.tpl.html',
    styleUrls: ['templates/dashboard/autoCompleteFilter/autoCompleteFilter.css'],
    selector: 'bsh-auto-complete-filter'
})

// Component class
export class AutoCompleteFilter implements OnInit {
    edit = false;
    @Input() autoCompleteFields
    @Output() onFilterChange = new EventEmitter<String>();
    filter: String = '';

    constructor() { }
    
    ngOnInit() { }

    onfilterChange() {
        this.onFilterChange.emit(this.filter);    
    }
 }

