import { Injectable } from '@angular/core';
import { Resource } from '../models/resource.model';
import { RESOURCES } from '../models/fakedata';
import { ConfigService } from './config.service'

@Injectable()
export class ResourceService {

    private host: string
    private port: number

    constructor(configService: ConfigService){
        var api = configService.getConfig["apiSecurity"]
        this.host = api["host"] || 'localhost'
        this.port = api["port"] || '3000'
    }

    getResources(): any {
        return fetch(`http://${this.host}:${this.port}/odata/resources`,{
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

    createResource(resource: Resource):void {
        fetch(`http://${this.host}:${this.port}/odata/resources`,{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(resource)
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