import { Record } from 'immutable';

const ProductRecord = Record({
    id: -1,
    number: -1,
    name: '',
    groupID: -1,
    createdOn: new Date(),
    createdBy: '',
    groupName: '',
    lineName: '',
});
/**
 * Product
 */
export class Product extends ProductRecord {
    id: number;
    number: string;
    name: String;
    createdOn: Date;
    createdBy: String;
    groupID: number;
    groupName: string;
    lineName: string;
    
    constructor(props) {
        super(props);
    }
}