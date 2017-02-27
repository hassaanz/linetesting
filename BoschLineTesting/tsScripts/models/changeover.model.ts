import { Record } from 'immutable';

const ChangeoverRecord = Record({
    ins_met_key: '',
    changeover: '',
    Created_By: -1,
    Created_On: new Date(),
});
/**
 * Changeover
 */
export class Changeover extends ChangeoverRecord {
    ins_met_key: string;
    changeover: string;
    Created_By: number;
    Created_On: Date;
    
    constructor(props) {
        super(props);
    }
}