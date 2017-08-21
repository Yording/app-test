import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

// Components
import { SignupComponent } from './signup/signup.component'

// Services
import { UserService } from '../../services/user.service'
import { ConfigService } from '../../services/config.service'


@Component({
  selector: 'security-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  viewProviders: [SignupComponent]
})
export class AuthenticationComponent implements OnInit {
  
  // attributes
  private menuOpt:object
  private isLogged: boolean

  constructor(private router: Router, private userService: UserService, private configService: ConfigService) { 
    this.userService.handleAuthentication();
    this.isLogged = this.userService.isAuthenticated()
    // Se inicializa un objeto para configurar el navbar para authentication
    this.menuOpt = {
      logo: 'Empresa',
      links: [
        { name: 'Login', href: 'authentication/login', module: 'authentication' },
      ]
    }
    console.log(this.isLogged,this.router.url)
    // if(!this.isLogged){
    //   this.router.navigate(["authentication"])
    // }
    // else if(this.router.url == '/'){
    //   this.router.navigate([this.configService.getConfig["authentication"]["routeInitial"]])
    // }
  }

  ngOnInit() {
   
  }

}
