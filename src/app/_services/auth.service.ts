import { Injectable } from '@angular/core';
import { UserDetails } from '../_models/user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userLogin(email: string, password: string) : boolean {
    const user = new UserDetails(email, password);
    localStorage.setItem('loggedInUser', user.email);
    return true;
  }

  isLoggedIn() : boolean {
    if( localStorage.getItem('loggedInUser') === null) {
      console.log("not logged in");
      return false;
    }
    return true;
  }

  userLogout() {
    localStorage.removeItem('loggedInUser');
  }

  get currentUser() {
    return localStorage.getItem('loggedInUser');
  }
}
