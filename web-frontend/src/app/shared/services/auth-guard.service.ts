import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
}) // service that implements CanActivate to secure specific route
export class AuthGuardService implements CanActivate {
  constructor(private route: Router, private auth: AuthService) {}

  // check if user is allowed to activate a route
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // if user is not loggedIn then redirect the user to login page
    // if (!this.auth.isLoggedIn()) {
    //   this.route.navigate(['/login']);
    // }
    return true;
  }
}
