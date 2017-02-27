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
    name: string;
    createdOn: Date;
    createdBy: string;

    constructor(props) {
        super(props);
    }
}