import { Injectable } from '@angular/core';
import { Resource } from '../models/resource.model';
import { RESOURCES } from '../models/fakedata';

@Injectable()
export class ResourceService {
    getResource(): Resource[] {
        // actual implementation would use async method
        return RESOURCES;
    }

}