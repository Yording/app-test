import { Component, OnInit,OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  // Inputs
   @Input() records: any[];
   @Input() caption: string;
   keys: string[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.records != undefined){
      this.keys = Object.keys(this.records[0]);
    }
    
  }
}
