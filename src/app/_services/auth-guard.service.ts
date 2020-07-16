import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import {
  Router,
  CanActivate
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login']).then(
        (nav) => {
          console.log(nav);
        },
        (err) => {
          console.log(err);
        }
      );
      return false;
    }

    return true;
  }
}
