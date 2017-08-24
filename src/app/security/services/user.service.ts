import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { USERS } from '../models/fakedata';
import { Router } from '@angular/router'
import * as auth0 from 'auth0-js';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

// Services
import { ConfigService } from '../services/config.service'

@Injectable()
export class UserService {

    private host: string
    private port: number
    private auth0: any
    private configAuth0: object
    private helper : JwtHelper = new JwtHelper();

    constructor(private configService: ConfigService, private router: Router){
        var api = this.configService.getConfig["apiSecurity"]
        this.host = api["host"] || 'localhost'
        this.port = api["port"] || 3000
        this.configAuth0 = this.configService.getConfig["authentication"]["configAuth0"]
        this.auth0 = new auth0.WebAuth(this.auth0 = {
            clientID: this.configAuth0["clientID"],
            domain: this.configAuth0["domain"],
            responseType: 'token id_token',
            audience: `https://${this.configAuth0["domain"]}/userinfo`,
            redirectUri: this.configAuth0["callbackURL"],
            scope: 'profile email read:messages write:messages openid'
        })
    }

    public login(): void {
        this.auth0.authorize();
    }

    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';
            this.setSession(authResult);

            // Si el usuario ya esta registrado lo redireciona al componene initial
            this.getUser(this.userProfile()['id'])
                .then(data => {
                    if(data != null){
                        this.router.navigate([this.configService.getConfig["authentication"]["routeInitial"]]);
                    }
                    else{
                        this.router.navigate(['/authentication/signup']);
                    }
                })
            
          } else if (err) {
            this.router.navigate(['/authentication/login']);
            console.log(err);
          }
        });
    }

    // Informacion obtenida en el pérfil de usuario de auth0
    public userProfile(): object{
          // Set the time that the access token will expire at
        const decode = this.helper.decodeToken(localStorage.getItem('token'))
        const user = {
          email: decode.email,
          name: decode.name,
          given_name: decode.given_name,
          last_name: decode.family_name,
          picture: decode.picture,
          id: Number(decode.sub.split('|')[1]),
          nick: decode.nickname
        }
        return user
    }

    private setSession(authResult): void {
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('token', authResult.idToken);
    }
    
    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        // Go back to the home route
        this.router.navigate(['/']);
    }
    
    public isAuthenticated(): boolean {
        return tokenNotExpired()
    }

    public getUser(id: number): any {
        return fetch(`http://${this.host}:${this.port}/odata/users('${id}')`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json()
            }
            return null
        })
        .catch(err => {
            console.log(err)
            throw err
        })
    }

    public getUsers(): any {
        return fetch(`http://${this.host}:${this.port}/odata/users`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
            throw err
        })
    }

    public createUser(user:object) {
        console.log(user)
        return fetch(`http://${this.host}:${this.port}/odata/users`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .catch(err => {
            console.log(err)
            throw err
        })
    }



    public isLogged():boolean{
        return localStorage.getItem('admin') ? true : false
    }
}