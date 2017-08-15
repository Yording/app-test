import { Component, OnInit } from '@angular/core';

// Components
import { TableComponent } from '../../../../components/table/table.component'

// services
import { ResourceService } from '../../../../services/resource.service';
import { Resource } from '../../../../models/resource.model';

@Component({
  selector: 'app-list-resources',
  templateUrl: './list-resources.component.html',
  styleUrls: ['./list-resources.component.css']
})
export class ListResourcesComponent implements OnInit {

  resouce: Resource[]
  
  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resouce = this.resourceService.getResource()
  }


}
