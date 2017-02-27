import { Record } from 'immutable';

const ProductGroupRecord = Record({
    group_id: -1,
    groupname: '',
    Created_By: -1,
    Created_On: new Date(),
});
/**
 * Changeover
 */
export class ProductGroup extends ProductGroupRecord {
    group_id: number;
    groupname: string;
    Created_By: number;
    Created_On: Date;
    
    constructor(props) {
        super(props);
    }
}