import { Record } from 'immutable';

const TestResultRecord = Record({
    Test_result_id: -1,
    prod_test_id: -1,
    line_id: -1,
    product_number: -1,
    value_test: '',
    answer_bool: '',
    comments: '',
    Created_By: -1,
    Created_On: new Date(),
    Oper_num: -1,
});
/**
 * Test Result
 */
export class TestResult extends TestResultRecord {
    private Test_result_id: number;
    private prod_test_id: number;
    private line_id: number;
    private product_number: number;
    private value_test: string;
    private answer_bool: string;
    private comments: string;
    private Created_By: number;
    private Created_On: Date;
    private Oper_num: number;
    
    constructor(props) {
    	super(props);
    }
}