import { Injectable } from '@angular/core';
import { Action } from '../models/action.model';
import { ACTIONS } from '../models/fakedata';

@Injectable()
export class ActionService {
    getAction(): Action[] {
        // actual implementation would use async method
        return ACTIONS;
    }
}