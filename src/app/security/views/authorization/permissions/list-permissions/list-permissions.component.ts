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

  permission: Permission[];

  constructor(private permissionService: PermissionService) { }

  ngOnInit() {
    this.permission = this.permissionService.getPermission();
  }

}
