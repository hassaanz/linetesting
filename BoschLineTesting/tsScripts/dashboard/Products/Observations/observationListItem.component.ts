// ====== ./dashboard/Products/Observations/observationListItem.component.ts ======

import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnChanges,
    SimpleChange
} from '@angular/core';
import { Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observation } from '../../../models/observation.model';
import { ProductObservationService } from '../../../services/productObservation.service'

@Component({
    templateUrl: 'templates/dashboard/products//Observations/observationListItem.tpl.html',
    styleUrls: ['templates/dashboard/products/Observations/observationListItem.css'],
    selector: 'bsh-observation-list-item'
})

export class ObservationListItemComponent implements OnChanges {
    @Input() observation: Observation;
    @Input() selectedID: number;
    @Output() obsSelected = new EventEmitter<Number>();
    selected:Boolean = false;

    constructor(private observationService: ProductObservationService) { }

    ngOnChanges() {
        console.log('OBSERVATION LIST ITEM CHANGE: ', this.observation);
        this.selected = this.observation.id === this.selectedID;
    }

    select() {
        this.obsSelected.emit(this.observation.id);
        this.selected = true;
    }
 }

