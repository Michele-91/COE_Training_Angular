import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isLoggedIn = true;

  // login() {
  //   this.isLoggedIn = true;
  // }

  // logout() {
  //   this.isLoggedIn = false;
  // }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

}
