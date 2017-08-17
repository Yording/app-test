import { Component, OnInit, Input } from '@angular/core';

// Components
import { TableComponent } from '../../../../components/table/table.component'

// services
import { PermissionService } from '../../../../services/permission.service';
import { Permission } from '../../../../models/permission.model';

@Component({
  selector: 'app-list-permissions',
  templateUrl: './list-permissions.component.html',
  styleUrls: ['./list-permissions.component.css'],
  viewProviders: [TableComponent]
})
export class ListPermissionsComponent implements OnInit {

  permissions: Permission[];

  constructor(private permissionService: PermissionService) { }

  ngOnInit() {
    // Se retorna todo los permisos que envia la api
    this.permissionService.getPermissions()
      .then(data => {
          // se obtiene la respuesta en la variable response
          var response = data["value"]
  
          // Se realiza un mapeo de las caracteristicas que se mostraran en la lista
          this.permissions = response.map(function(ele){
            return {
              Id: ele["id_permission"],
              User: ele["id_user"],
              Role: ele["id_role"],
              Resource: ele["id_resource"]
            }
          })
      });
  }

}
