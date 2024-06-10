import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router, private authService: AuthService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const loggedIn = this.authService.logedIn; // or false get you logged in status from state  
    if (loggedIn) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(next, state);
  }
}