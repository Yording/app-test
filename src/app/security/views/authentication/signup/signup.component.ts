import { Component, OnInit, Input,Attribute } from '@angular/core';

// services


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  // Inputs
  public options:object

  constructor() { 
    // Inicializar las propiedades de la vista signUp
    this.options = {
      fields:[
        {
          name: 'Name'
        },
        {
          name: 'Phone'
        },
        {
          name: 'Email'
        }
      ]
    }
  }
  // static config(config: object) {
  //   console.log(config)
  //   // this.configService(config)
  // }
  ngOnInit() {
    console.log(this.options)
  }

}
