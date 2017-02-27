import {Injectable,Inject} from '@angular/core';
import  { Http,Headers,URLSearchParams } from '@angular/http';
import { User } from "../models/user.model";
import { List } from 'immutable';
import { Observable } from "rxjs/Observable";


@Injectable()
export class UserBackendService {

    private userList : List<User> = List<User>();
    http:Http;

    constructor(http:Http)  {
        this.http = http;
    }

    getAllProducts() {
        return this.http.get('/api/users');
    }

    addUser(newUser: User) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return this.http.post(
            '/api/users',
            JSON.stringify(newUser.toJS()),
            {headers})
        .share();
    }

    deleteUser(deletedUser: User) {
        let params = new URLSearchParams();
        params.append('id', '' + deletedUser.user_id );

        return this.http.delete('/api/users', {search: params}).share();
    }

    findByID(id: number) {
        return this.http.get('/api/users/' + id.toString());   
    }
    
    updateUser(updatedUser: User) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return  this.http.put(
            '/api/users/' + updatedUser.user_id.toString(),
            JSON.stringify(updatedUser.toJS()),
            {headers})
        .share();
    }

}