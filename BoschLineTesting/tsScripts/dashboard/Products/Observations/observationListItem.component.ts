// ====== ./dashboard/Products/Observations/observationListItem.component.ts ======

import { Component, Input, Output, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observation } from '../../../models/observation.model';
import { ProductObservationService } from '../../../services/productObservation.service'

@Component({
    templateUrl: 'templates/dashboard/products//Observations/observationListItem.tpl.html',
    styleUrls: ['templates/dashboard/products/Observations/observationListItem.css'],
    selector: 'bsh-observation-list-item'
})

export class ObservationListItemComponent implements OnInit {
    @Input() observation: Observation;
    @Output() obsSelected;
    constructor(private observationService: ProductObservationService) { }

    ngOnInit() {}    
 }

