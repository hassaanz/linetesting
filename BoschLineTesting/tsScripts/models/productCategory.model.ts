import { Record } from 'immutable';

const ProductCategoryRecord = Record({
    id: '0',
    name: '',
    createdOn: new Date(),
    createdBy: ''
});
/**
 * Product
 */
export class ProductCategory extends ProductCategoryRecord {
    id: number;
    name: String;
    createdOn: Date;
    createdBy: String;

    constructor(props) {
        super(props);
    }
}