import { Injectable } from '@angular/core';
import { ConfigService } from './config.service'

@Injectable()
export class RolesByActionsService {

    private host: string
    private port: number

    constructor(configService: ConfigService){
        var api = configService.getConfig["apiSecurity"]
        this.host = api["host"] || 'localhost'
        this.port = api["port"] || '3000'
    }

    getRolesByActions(): any {
        return fetch(`http://${this.host}:${this.port}/odata/rolesByActions`,{
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

    createRoleByAction(rolebyaction: object):void {
        fetch(`http://${this.host}:${this.port}/odata/rolesByActions`,{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(rolebyaction)
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