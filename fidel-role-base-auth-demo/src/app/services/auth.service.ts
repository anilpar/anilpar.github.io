import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private route: Router) { }

  canActivate() {
    if (window.localStorage.getItem('isLogin') != 'yes') {
      this.route.navigate(['login']);
    }
    return window.localStorage.getItem('isLogin') == 'yes';
  }

}
