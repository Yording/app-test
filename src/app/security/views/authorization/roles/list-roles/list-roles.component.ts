import { Component, OnInit } from '@angular/core';

// Components
import { TableComponent } from '../../../../components/table/table.component'

// services
import { RoleService } from '../../../../services/role.service';
import { Role } from '../../../../models/role.model';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {

  role: Role[]

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.role = this.roleService.getRole()
  }

}
