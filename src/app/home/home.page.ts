import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user = {
    user_email: "ju.azocar@profesor.duoc.cl",
    user_password: "abcd1234"
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
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigateByUrl('/iniciopage', navigationExtras);
  }

}
