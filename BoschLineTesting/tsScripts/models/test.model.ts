import { Record } from 'immutable';

const TestRecord = Record({
    test_id: -1,
    oper_num: '',
    Main_desc: '',
    Rec_desc: '',
    version: '',
    valid_to: new Date(),
    valid_from: new Date(),
    oper_shorttext: '',
    tool_number: '',
    ins_met_key: '',
    Created_By: -1,
    Created_On: new Date(),
});
/**
 * Test
 */
export class Test extends TestRecord {
    private test_id: number;
    private oper_num: string;
    private Main_desc: string;
    private Rec_desc: string;
    private version: string;
    private valid_to: Date;
    private valid_from: Date
    private oper_shorttext: string;
    private tool_number: string;
    private ins_met_key: string;
    private Created_By: number;
    private Created_On: Date;
    
    constructor(props) {
    	super(props);
    }
}