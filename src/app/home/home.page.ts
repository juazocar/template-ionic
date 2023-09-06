import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user = {
    user_email: "",
    user_password: ""
  }

  myid = 56;
  customPokemon = {
    name: 'Simonimon',
    skills: ['ionic', 'angular']
  };

  constructor(private router: Router) {}

  ngOnInit() {
  }

  login() {
    console.log("login");
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
   // console.log(navigationExtras);
    this.router.navigateByUrl('/iniciopage', navigationExtras);
  }

  onChangeEmail(event:any,value:any){
    console.log("change email");
    this.user.user_email = value;
    console.log(event.detail.data)
    }

  onChangePassword(event:any,value:any){
    console.log("change password");
      this.user.user_password = value;
      console.log(event.detail.data)
      }

  setEmail(value:string) {
    console.log("Set email");
    this.user.user_email = value;
  }

  setPassword(value:string) {
    console.log("Set password");
    this.user.user_password = value;
  }

}
