import { Injectable, } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Observation } from "../models/observation.model";
import { List } from "immutable";
import { ProductObservationBackendService } from './productObservationBackend.service';

@Injectable()
export class ProductObservationService {
  

    private _productObservationSource: BehaviorSubject<List<Observation>> = new BehaviorSubject(List([]));

    constructor(private productsObservationBackend: ProductObservationBackendService) {
        this.updateObsAndPublish();
    }

    updateObsAndPublish() {
        let observation = (<Object[]>this.productsObservationBackend.getAllObservations().toArray()).map( (obs: any) => {
            return new Observation({
                number: obs.number,
                shortText: obs.shortText,
                inspectionChar: obs.inspectionChar,
                toolNumber: obs.toolNumber,
                inspectionMethod: obs.inspectionMethod,
                maintainanceDesc: obs.maintainanceDesc,
                recordDesc: obs.recordDesc,
                insMetKey: obs.insMetKey,
                prodResDesc: obs.prodResDesc,
                respDesc: obs.respDesc,
                validFrom: obs.ValidFrom,
                validTo: obs.validTo,
                createdOn: obs.createdOn,
                prodNum: obs.prodNum
            })
        });
        this._productObservationSource.next(List(observation));
    }

    get observations() {
        return this._productObservationSource.asObservable();
    }

    addObservation(newObs: Observation) {
        let saved = this.productsObservationBackend.createObservation(newObs);
        this.updateObsAndPublish();
        // this._productObservationSource.next(this._productObservationSource.getValue().push(saved));
    }

    getObservationByID(id: number) {
        let foundObs = this.productsObservationBackend.findByID(id);
        return foundObs;
    }

    findObsForProduct(prodID: number) {
        this._productObservationSource.getValue().toArray().filter((obs: Observation) => {
            return (obs.prodNum === prodID);
        })
    }
    getObservationByNumber(obsNum: number) {
        return this.productsObservationBackend.findByNumber(obsNum);
    }
    updateObservation(obs: Observation) {
        this.updateObsAndPublish();
        this.productsObservationBackend.updateObservation(obs);
    }
}