import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService implements CanActivate{

  constructor(public authenticationService: AuthenticationService,
              public router: Router) { }
  canActivate(): boolean {
     return this.authenticationService.isAuthenticated();
  }
}
