import { Injectable } from "@angular/core";
import { UserDetails } from "../_models/user-details";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl: string = "http://localhost:8080";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  userLogin(email: string, password: string): Observable<Boolean> {
    const user = new UserDetails(email, password);
    return this.http.post<boolean>(
      this.apiUrl + "/api/login",
      JSON.stringify(user),
      this.httpOptions
    );
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem("loggedInUser") === null) {
      console.log("not logged in");
      return false;
    }
    return true;
  }

  userLogout() {
    localStorage.removeItem("loggedInUser");
  }

  get currentUser() {
    return localStorage.getItem("loggedInUser");
  }
}
