import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'security-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  
  // Attributes
  private menuOpt:object
  title: string = 'Project Center';
  
  constructor() { 
    // Se inicializa un objeto para configurar el navbar para la authorization
    this.menuOpt = {
      logo: 'Empresa',
      links: [
        { name: 'Resources', href: 'authorization/create-resource'},
        { name: 'Actions', href: 'authorization/create-action'},
        { name: 'Roles', href: 'authorization/create-role'},
        { name: 'Permissions', href: 'authorization/create-permission'},
      ]
    }
  }

  ngOnInit() {
    
  }

}
