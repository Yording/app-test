import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { UserService } from '../../services/user.service'

@Component({
  selector: 'security-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  @Input() options: object
  private isLogged: boolean
  // private options: object
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  // Revisa cada ves que encuentra un cambio en el componente
  ngDoCheck(){
    if (this.isLogged !== this.userService.isLogged()) {
      this.isLogged = this.userService.isLogged()
    }
  }
}
