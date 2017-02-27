import { Record } from 'immutable';

const UserRecord = Record({
    user_id: -1,
    nt_username: '',
    Created_By: -1,
    Created_On: new Date(),
    Department: '',
    Time_Stamp: new Date(),
    line_id: -1
});
/**
 * User
 */
export class User extends UserRecord {
	public user_id: number;
    public nt_username: string;
    public Created_By: number;
    public Created_On: Date;
    public Department: string;
    public Time_Stamp: string;
    public line_id: number;
    
    constructor(props) {
    	super(props);
    }
}