import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';
import { ROLES } from '../models/fakedata';

@Injectable()
export class RoleService {
    getRole(): Role[] {
        // actual implementation would use async method
        return ROLES;
    }
}