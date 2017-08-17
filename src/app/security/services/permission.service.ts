import { Injectable } from '@angular/core';
import { Permission } from '../models/permission.model';
import { PERMISSIONS } from '../models/fakedata';
import { ConfigService } from './config.service'

@Injectable()
export class PermissionService {

    private host: string
    private port: number

    constructor(configService: ConfigService){
        var api = configService.getConfig["authentication"]["apiSecurity"]
        this.host = api["host"] || 'localhost'
        this.port = api["port"] || '3000'
    }

    getPermissions(): any {
        return fetch(`http://${this.host}:${this.port}/odata/permissions`,{
         method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
           console.log(err)
           throw err
        })
    }

    createPermission(permission: Permission):void {
        fetch(`http://${this.host}:${this.port}/odata/permissions`,{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(permission)
        })
        .then(response => {
            if(response.ok){
                console.log("registro con exitó")
            }
        })
        .catch(err => {
            console.log(err)
            throw err
        })
    }
}