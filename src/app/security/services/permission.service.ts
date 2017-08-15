import { Injectable } from '@angular/core';
import { Permission } from '../models/permission.model';
import { PERMISSIONS } from '../models/fakedata';

@Injectable()
export class PermissionService {
    getPermission(): Permission[] {
        // actual implementation would use async method
        return PERMISSIONS;
    }
}