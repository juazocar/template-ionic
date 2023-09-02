import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  myid = 56;
  customPokemon = {
    name: 'Simonimon',
    skills: ['ionic', 'angular']
  };

  constructor(private router: Router) {}

  ngOnInit() {
  }

  openWithExtras() {
    let navigationExtras: NavigationExtras = {
      state: {
        id: this.myid,
        pokemons: this.customPokemon
      }
    };
    console.log(navigationExtras);
    this.router.navigateByUrl('/loginpage', navigationExtras);
  }

}
