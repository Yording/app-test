import { Component, OnInit } from '@angular/core';
import { Resource } from '../../../../models/resource.model'
import { ResourceService } from '../../../../services/resource.service'

declare var $:any;
@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.css']
})
export class CreateResourceComponent implements OnInit {

  private resource: Resource
  private resources: Resource[]

  constructor(private resourceService: ResourceService) { 
    this.resource =  <Resource>{}
  }

  ngOnInit() {
    this.resourceService.getResources()
      .then(data => {
        var response = data["value"]
        this.resources = response.map(ele => {
          return {
            id: ele["id_resource"],
            resource: ele["resource1"]

          }
        })
      })
    
  }

  createResource(){
    console.log("click",this.resource)
    // this.resourceService.createResource(this.resource)
  }

}
