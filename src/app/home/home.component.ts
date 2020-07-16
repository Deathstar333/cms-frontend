import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  opened: boolean = true;
  email: String = "user@domain.com";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.email = this.auth.currentUser;
  }

  logout() {
    this.auth.userLogout();
    this.router.navigate(['login']);
  }

}
