/**
 * Observation
 */

import { Record } from 'immutable';

const ObservationRecord = Record({
    id: -1,
    number: 0,
    shortText: '',
    inspectionChar: '',
    toolNumber: 0,
    inspectionMethod: '',
    maintainanceDesc: '',
    recordDesc: '',
    insMetKey: '',
    prodResDesc: '',
    respDesc: '',
    validFrom: '',
    validTo: '',
    createdOn: new Date(),
    prodNum: '-1',
    minVal: 0,
    maxVal: 0,
    precision: 0,
    valBool: null,
    boolQuestion: ''
});

export class Observation extends ObservationRecord {
    id: number;
    number: number;
    shortText: string;
    inspectionChar: string;
    toolNumber: number;
    inspectionMethod: string;
    maintainanceDesc: string;
    recordDesc: string;
    insMetKey: string;
    prodResDesc: string;
    respDesc: string;
    validFrom: Date;
    validTo: Date;
    createdOn: Date;
    prodNum: number;
    minVal: number;
    maxVal: number;
    precision: number;
    valBool: boolean;
    boolQuestion: string

    constructor(props) {
        super(props);
    }
}