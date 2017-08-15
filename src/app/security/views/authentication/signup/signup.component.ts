import { Component, OnInit, Input,Attribute } from '@angular/core';

// Services
import { ConfigService } from '../../../services/config.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  // Inputs
  private options:object

  constructor(configService: ConfigService) { 
    // Inicializar las propiedades recibidas desde el modulo principal
    this.options = configService.getConfig['signUpOpts']
  }
 
  ngOnInit() {
  }

}
