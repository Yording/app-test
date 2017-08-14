import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-list-resources',
  templateUrl: './list-resources.component.html',
  styleUrls: ['./list-resources.component.css']
})
export class ListResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.modal').modal();
  }


}
