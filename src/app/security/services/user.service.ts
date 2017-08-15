import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { USERS } from '../models/fakedata';

@Injectable()
export class UserService {
    getUser(): User[] {
        // actual implementation would use async method
        return USERS;
    }
}