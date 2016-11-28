// ====== ./dashboard/Products/Observations/observationList.component.ts ======

import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observation } from '../../../models/observation.model';
import { List } from 'immutable';
import { ProductObservationService } from '../../../services/productObservation.service'

@Component({
    templateUrl: 'templates/dashboard/products//Observations/observationList.tpl.html',
    styleUrls: ['templates/dashboard/products/Observations/observationList.css'],
    selector: 'bsh-observation-list'
})

export class ObservationListComponent implements OnInit {
    edit = false;
    observations:List<Observation>;
    @Input() prodNumber: number;
    
    constructor(private observationService: ProductObservationService) {
        observationService.observations.subscribe(
            res => {
                console.log('Got Observations: ', res.toJS());
                this.observations = res.toJS();
            },
            err => {
                console.log("Error retrieving Observations");
            })
    }

    ngOnInit() {
        console.log('Init Obs List. Product Number: ', this.prodNumber);
    }

    editProd() {
        this.edit = true;
    }

    onSave(f: NgForm) {
        this.edit = false;
    }
 }

