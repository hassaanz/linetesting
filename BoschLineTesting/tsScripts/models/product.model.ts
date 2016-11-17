import { Record } from 'immutable';

const ProductRecord = Record({
    number: '0',
    name: '',
    createdOn: new Date(),
    createdBy: ''
});
/**
 * Product
 */
export class Product extends ProductRecord {
    number: number;
    name: String;
    createdOn: Date;
    createdBy: String;

    constructor(props) {
        super(props);
    }
}