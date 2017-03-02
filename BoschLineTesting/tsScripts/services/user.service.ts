import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { List } from 'immutable';
import { User } from "../models/user.model";
import { UserBackendService } from './userBackend.service';

@Injectable()
export class UserService {
  private _userSource : BehaviorSubject<List<User>> = new BehaviorSubject(List([]));

	constructor(private userBackendService: UserBackendService) {
	  this.loadInitialData();
	}
	loadInitialData() {
		console.log('Getting all users data...');
		this.userBackendService.getAllUsers()
			.subscribe( res => {
				let users = (<Object[]>res.json()).map( (user: any) =>
					new User({
						user_id: user.user_id,
						nt_username: user.nt_username,
						Created_By: user.Created_By,
						Created_On: user.Created_On,
						Department: user.Department,
						Time_Stamp: user.Time_Stamp,
						line_id: user.line_id
					}));
				this._userSource.next(List(users));
			},
			err => console.log('Error retrieving Users')
		)
	}
	// userChanged(usr: User) {
	//     this._userSource.next(usr);
	// }
	get users() {
		return this._userSource.asObservable();
	}
	addUser(newUser: User) {
		let obs = this.userBackendService.addUser(newUser);
		obs.subscribe( res => {
			this._userSource.next(this._userSource.getValue().push(newUser))
		})
		return obs;
	}
}