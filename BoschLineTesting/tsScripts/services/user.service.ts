import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { User } from "../models/user.model";

@Injectable()
export class UserService {
  private userSource = new Subject<User>();
  
  userSource$ = this.userSource.asObservable();
//   constructor() {
//       this.dataChange = new Observable((observer: Observer)) {
//           this.dataChangeObserver = observer;
//       }
//    }
    userChanged(usr: User) {
        this.userSource.next(usr);
    }
}