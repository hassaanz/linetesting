import {Injectable,Inject} from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { User } from "../models/user.model";
import { List } from 'immutable';
import { Observable } from "rxjs/Observable";
import { Constants } from '../config/constants';


@Injectable()
export class UserBackendService {

    private userList : List<User> = List<User>();
    http:Http;
    private apiPath: string = Constants.usersPath();
    constructor(http:Http)  {
        this.http = http;
    }

    getAllUsers() {
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        return this.http.get(this.apiPath, {headers});
    }
    
    addUser(newUser: User) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return this.http.post(
            '/api/users',
            JSON.stringify(newUser.toJS()),
            {headers}
        ).share();
    }

    deleteUser(deletedUser: User) {
        return this.http.delete(`${this.apiPath}/${deletedUser.user_id.toString()}`)
        .share();
    }

    findByID(id: number) {
        return this.http.get(`${this.apiPath}/${id.toString()}`);   
    }
    
    updateUser(updatedUser: User) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return  this.http.put(
            `${this.apiPath}/${updatedUser.user_id.toString()}`,
            JSON.stringify(updatedUser.toJS()),
            {headers}
        ).share();
    }

}