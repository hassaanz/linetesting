import { Record } from 'immutable';

const UserRolesRecord = Record({
    user_roles_id: -1,
    user_id: -1,
    role_id: -1,
});

/**
 * User Roles
 */
export class UserRoles extends UserRolesRecord {
	public user_roles_id: number;
	public user_id: number;
	public role_id: number;

	constructor(props) {
		super(props);
	}
}