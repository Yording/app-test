import { Component, OnInit } from '@angular/core';

// Components
import { TableComponent } from '../../../../components/table/table.component'

// services
import { ActionService } from '../../../../services/action.service';
import { Action } from '../../../../models/action.model';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.css']
})
export class ListActionsComponent implements OnInit {

  action: Action[];

  constructor(private actionService: ActionService) { }

  ngOnInit() {
    this.action = this.actionService.getAction();
  }

}
