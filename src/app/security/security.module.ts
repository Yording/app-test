import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';

//Components
import { LoginComponent } from './views/authentication/login/login.component';
import { SignupComponent } from './views/authentication/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateResourceComponent } from './views/authorization/resources/create-resource/create-resource.component';
import { ListResourcesComponent } from './views/authorization/resources/list-resources/list-resources.component';
import { CreateActionComponent } from './views/authorization/actions/create-action/create-action.component';
import { ListActionsComponent } from './views/authorization/actions/list-actions/list-actions.component';
import { ListRolesComponent } from './views/authorization/roles/list-roles/list-roles.component';
import { CreateRolesComponent } from './views/authorization/roles/create-roles/create-roles.component';
import { CreatePermissionComponent } from './views/authorization/permissions/create-permission/create-permission.component';
import { ListPermissionsComponent } from './views/authorization/permissions/list-permissions/list-permissions.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    CreateResourceComponent,
    ListResourcesComponent,
    CreateActionComponent,
    ListActionsComponent,
    ListRolesComponent,
    CreateRolesComponent,
    CreatePermissionComponent,
    ListPermissionsComponent,
    TableComponent
  ]
})
export class SecurityModule { }
