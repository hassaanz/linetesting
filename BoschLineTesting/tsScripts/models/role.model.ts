import { Record } from 'immutable';

const RoleRecord = Record({
    role_id: -1,
    role: '',
    description: '',
    Created_By: -1,
    Created_On: new Date(),
});
/**
 * Role
 */
export class Role extends RoleRecord {
    private role_id: number;
    private role: string;
    private description: string;
    private Created_By: number;
    private Created_On: Date;
    
    constructor(props) {
    	super(props);
    }
}