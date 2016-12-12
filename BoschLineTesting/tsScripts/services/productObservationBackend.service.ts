import {Injectable,Inject} from '@angular/core';
import  { Http,Headers,URLSearchParams } from '@angular/http';
import { Observation } from "../models/observation.model";
import { List } from 'immutable';
import { Observable } from "rxjs/Observable";


@Injectable()
export class ProductObservationBackendService {
    private observations = [
        {
            "number":3100,
            "shorttext": "zuführen Lagerdecke,Einpreseen Sinterl",
            "inspectionChar": "Alle Bautiele vollständig montiert",
            "toolNumber": 7186932654,
            "Spezification,toleranz": ",DRW,S",
            "maintiananceDesc": "Total Productive maintainance",
            "recordDesc": "Fertigung freigabe Rüsten",
            "insMetKey": "QE00",
            "ProdResDesc": "Messv. AV501A1/Nullstück AV130A",
            "respDesc": "Fertigungsteamleiter",
            "validFrom": 21-10-2016,
            "validTo" : null,
            "createdOn" : 18-11-2016,
            "prodNum": "0130002650"
        },
        {
            "number":2800,
            "shorttext": "Aufpreseen Hülse auf Anker" ,
            "inspectionChar": "Hüulse korrect montiert und alle bauteile unbechadigt",
            "toolNumber": 7186932654,
            "Spezification,toleranz":",DRW,S",
            "maintiananceDesc": "Total Productive maintainance",
            "recordDesc": "Fertigung freigabe Rüusten",
            "insMetKey": "Qp43",
            "ProdResDesc": "W439 Hulsenaufpres Hulsenaufpressautomat MY1095A09",
            "respDesc": "Automatik",
            "validFrom": 21-10-2016,
            "validTo" : null,
            "createdOn" : 18-11-2016,
            "prodNum": "0130002650"
        },
        {
            "number":2550,
            "shorttext": "Verstemmen Lagerdeckel Absaugen Spane" ,
            "inspectionChar": "Polgehause, Lagerdeckel,Anker ohne sichtbare Beschadigungen" ,
            "toolNumber": 7186932654,
            "Spezification,toleranz": "DRW" ,
            "maintiananceDesc": "Rusten",
            "recordDesc": "Externer Datenspeicher",
            "insMetKey": "Qp43",
            "ProdResDesc": "1109846 Verstemmvorrichtung MY1261 A 06 13 W426 sauger W426 Sauger, Spane",
            "respDesc": "Fertiegungsteamleiter Sichtprufung",
            "validFrom": 21-10-2016,
            "validTo" : null,
            "createdOn" : 18-11-2016,
            "prodNum": "0390200123"
        },
        {
            "number":2100,
            "shorttext": "Magnetisieren Polgehause (4 stationen)",
            "inspectionChar": "Kalottenverdrehmoment" ,
            "toolNumber": 7186932654,
            "Spezification,toleranz": "FHW" ,
            "maintiananceDesc": "Total prufmittle uberwaschung",
            "recordDesc": "Externer Datenspeicher",
            "insMetKey": "Qp43",
            "ProdResDesc": "1112136 Magnetisierstation 1-4 MY 1261 A 0207 600083000 Magnetisierstation 4 MY 1261 A0208",
            "respDesc": "FTL 7186.932.874 W426 Federwaage JMP1 W426 prufdom LY 222 A13",
            "validFrom": 21-10-2016,
            "validTo" : null,
            "createdOn" : 18-11-2016,
            "prodNum": "0390200123"
        }
    ];

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

        this.obsList = this.obsList.unshift(newObs.toJS());
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
    findByNumber(num: number) {
        return this.obsList.find( (obs) => {
            return obs.number === num;
        });
    }

}