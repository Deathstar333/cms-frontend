import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserDetails } from "../_models/user-details";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl: string = "http://localhost:8080";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  addUser(user: UserDetails): Observable<any> {
    return this.http.post(
      this.apiUrl + "/api/register",
      JSON.stringify(user),
      this.httpOptions
    );
  }
}
