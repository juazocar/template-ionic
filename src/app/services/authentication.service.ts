import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
@Injectable()
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private api: ApiService,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.storage.create();
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  

  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
  login(usuario:string, pass: string) {
    
    var response = {
      username: usuario,
      password: pass
    };

    this.api.loginPosts(JSON.stringify(response)).subscribe((res) => {   
       
      var parsedJson = JSON.parse(JSON.stringify(res));  
      var code = parsedJson['code']
      var message = parsedJson['message']
     
      if(code == '200'){
        this.storage.set('USER_INFO', response).then((response) => {
          this.router.navigate(['/iniciopage']);
          this.authState.next(true);
        });
      } else{
        console.log(message);
      }
   }, (error)=>{
     console.log(error);
   });

   /* 
     */
  }
  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }
  isAuthenticated() {
    return this.authState.value;
  }
}

type LoginResponse = {
    code: string,
    message: string
}