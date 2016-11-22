// ====== ./dashboard/Products/Observations/observationList.component.ts ======

import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductObservationService } from '../../../services/productObservation.service'

@Component({
    templateUrl: 'templates/dashboard/products//Observations/observationList.tpl.html',
    styleUrls: ['templates/dashboard/products/Observations/observationList.css'],
    selector: 'bsh-observation-list'
})

export class ObservationListComponent implements OnInit {
    edit = false;
    @Input() prodNumber: number;

    constructor(private observationService: ProductObservationService) { }

    ngOnInit() {
        
    }

    editProd() {
        this.edit = true;
    }

    onSave(f: NgForm) {
        this.edit = false;
    }
 }

