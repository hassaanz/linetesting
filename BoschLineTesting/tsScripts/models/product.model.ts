import { Record } from 'immutable';

const ProductRecord = Record({
    product_number: -1,
    product_name: '',
    Created_By: -1,
    Created_On: new Date(),
    Group_id: -1,
});
/**
 * Product
 */
export class Product extends ProductRecord {
    product_number: number;
    product_name: string;
    Created_By: number;
    Created_On: Date;
    Group_id: number;
    
    constructor(props) {
        super(props);
    }
}