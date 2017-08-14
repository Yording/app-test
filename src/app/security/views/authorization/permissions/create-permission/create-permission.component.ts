import { Component, OnInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.css']
})
export class CreatePermissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Inicializo la etiqueta select usada con materialize
    $('select').material_select();
  }

}
