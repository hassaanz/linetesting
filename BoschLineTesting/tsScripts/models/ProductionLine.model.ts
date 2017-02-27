import { Record } from 'immutable';

const ProductionLineRecord = Record({
    prod_line_id: -1,
    line_id: -1,
    product_number: -1,
    From: new Date(),
    To: new Date(),
    Created_By: -1,
    Created_On: new Date(),
});
/**
 * Changeover
 */
export class ProductionLine extends ProductionLineRecord {
    prod_line_id: number;
    line_id: number;
    product_number: number;
    From:  Date;
    To: Date;
    Created_By: number;
    Created_On: Date;
    
    constructor(props) {
        super(props);
    }
}