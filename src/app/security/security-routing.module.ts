import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './views/authentication/login/login.component'
import { SignupComponent } from './views/authentication/signup/signup.component'
import { CreateResourceComponent } from './views/authorization/resources/create-resource/create-resource.component'
import { ListResourcesComponent } from './views/authorization/resources/list-resources/list-resources.component'
import { CreateActionComponent } from './views/authorization/actions/create-action/create-action.component'
import { ListActionsComponent } from './views/authorization/actions/list-actions/list-actions.component'
import { CreateRolesComponent} from './views/authorization/roles/create-roles/create-roles.component'
import { ListRolesComponent } from './views/authorization/roles/list-roles/list-roles.component'
import { CreatePermissionComponent } from './views/authorization/permissions/create-permission/create-permission.component'
import { ListPermissionsComponent } from './views/authorization/permissions/list-permissions/list-permissions.component'
import { AdminLoginComponent } from './views/authorization/admin-login/admin-login.component'


const routes: Routes = [
  { path: 'authentication',
    children: [
       { path: 'login', component: LoginComponent },
       { path: 'signup', component: SignupComponent },
    ]
  },
  {
    path: 'authorization',
    children: [
       { path: '', component: AdminLoginComponent},
       { path: 'create-resource', component: CreateResourceComponent },
       { path: 'list-resources', component: ListResourcesComponent },
       { path: 'create-action', component: CreateActionComponent },
       { path: 'list-actions', component: ListActionsComponent },
       { path: 'create-role', component: CreateRolesComponent },
       { path: 'list-roles', component: ListRolesComponent },
       { path: 'create-permission', component: CreatePermissionComponent },
       { path: 'list-permissions', component: ListPermissionsComponent },
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
