import { Record } from 'immutable';

const ProductTestRecord = Record({
    prod_test_id: -1,
    product_number: -1,
    test_id: -1,
    Oper_num: -1,
    minimum: -1,
    maxumum: -1,
    nominal: -1,
    Min_c: -1,
    Max_c: -1,
    Unit_measure: '',
    Created_By: -1,
    Created_On: new Date(),
    Answer_bool: '',
    ins_met_key: -1,
    Repititions: -1
});
/**
 * ProductTest
 */
export class ProductTest extends ProductTestRecord {
    prod_test_id: number;
    product_number: number;
    test_id: number;
    Oper_num: number;
    minimum: number;
    maximum: number;
    nominal: number;
    Min_c: number;
    Max_c: number;
    Unit_measure: string;
    Created_By: -1;
    Created_On: Date;
    Answer_bool: string;
    ins_met_key: number;
    Repititions: number;
    
    constructor(props) {
        super(props);
    }
}