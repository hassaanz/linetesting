import {Injectable,Inject} from '@angular/core';
import  { Http,Headers,URLSearchParams } from '@angular/http';
import { Observation } from "../models/observation.model";
import { List } from 'immutable';
import { Observable } from "rxjs/Observable";


@Injectable()
export class ProductObservationBackendService {
    private observations = [];

    private obsList : List<Observation> = List<Observation>(this.observations);

    constructor(private http:Http) { }

    getAllObservations() {
        return this.obsList;
        // return this.http.get('/api/products');
    }

    nextID() {
        return this.observations.length;
    }

    createObservation(newObs: Observation) {

        this.obsList.push(newObs);
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json; charset=utf-8');

        // return this.http.post('/api/products', JSON.stringify(newProduct.toJS()), {headers}).share();
        return newObs;
    }

    deleteObservation(deletedObs: Observation) {
        // this.prodList = this.prodList.find(deletedProduct, 1)
        return {status: 1};
        // let params = new URLSearchParams();
        // params.append('id', '' + deletedProduct.number );

        // return this.http.delete('/api/product', {search: params}).share();
    }
    findByID(id: number) {
        this.obsList.forEach( (prod: Observation) => {
            if (prod.number === id) {
                return prod;
            }
        })
        return null;
    }
    findIndexByID(id: number) {
        this.obsList.forEach( (prod: Observation, ind: number) => {
            if (prod.number === id) {
                return ind;
            }
        });
        return -1;
    }
    updateObservation(updatedObservation: Observation) {
        let foundObsInd:number = this.findIndexByID(updatedObservation.number);
        if (foundObsInd) {
            this.obsList = this.obsList.set(foundObsInd, updatedObservation);
            return updatedObservation;
        }
        return null;
    }

}