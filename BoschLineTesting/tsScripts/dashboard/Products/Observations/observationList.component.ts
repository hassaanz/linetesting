// ====== ./dashboard/Products/Observations/observationList.component.ts ======

import { 
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';
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
    filteredObservations: List<Observation>;
    selectedObs: number;
    obsSearchStr: string = '';
    @Input() prodNumber: number;
    @Output() obsSelect = new EventEmitter<Observation>();
    
    constructor(private observationService: ProductObservationService) {
        observationService.observations.subscribe(
            res => {
                console.log('Got Observations: ', res.toJS());
                this.observations = res;
                this.filteredObservations = this.filterObs(this.obsSearchStr, this.observations);
            },
            err => {
                console.log("Error retrieving Observations");
            }
        );
    }

    ngOnInit() {
        console.log('Init Obs List. Product Number: ', this.prodNumber);
    }

    filterObs(filterStr: string, origObs: List<Observation>):List<Observation> {
        if (filterStr === '') {
            return origObs;
        }
        return origObs.filter( obs => obs.number.toString().includes(filterStr)).toList();
    }

    obsFilterChanged(value) {
        console.log(value);
        this.filteredObservations = this.filterObs(value, this.observations);
    }

    editProd() {
        this.edit = true;
    }

    onObsSelect(obs: Observation, data) {
        this.selectedObs = obs.number;
        // console.log('Oservation selected event.', obs);
        this.obsSelect.emit(obs);
    }

    onSave(f: NgForm) {
        this.edit = false;
    }
 }

