import { Component, OnInit, Input } from '@angular/core';

// Components
import { SignupComponent } from './signup/signup.component'


@Component({
  selector: 'security-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  viewProviders: [SignupComponent]
})
export class AuthenticationComponent implements OnInit {
  
  // attributes
  private menuOpt:object

  constructor() { 
    // Se inicializa un objeto para configurar el navbar para authentication
    this.menuOpt = {
      logo: 'Empresa',
      links: [
        { name: 'Login', href: 'authentication/login', options: {} },
        { name: 'Sign Up', href: 'authentication/signup', options: {}}
      ]
    }
    // signupComponent.options = this.signUpOpts
  }

  ngOnInit() {
   
  }

}
