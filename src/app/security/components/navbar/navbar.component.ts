import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'security-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() options: object
  // private options: object
  constructor() {
    
  }

  ngOnInit() {
    console.log(this.options)
  }

}
