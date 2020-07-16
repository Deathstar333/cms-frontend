import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = this.formBuilder.group({
    email: [
      "",
      [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
      ],
    ],
    password: [
      "",
      [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.userForm.value);

    this.auth.userLogin(
      this.userForm.controls["email"].value,
      this.userForm.controls["password"].value
    );

    this.router.navigate(["/", "home"]).then(
      (nav) => {
        console.log(nav);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getEmailError() {
    if (this.userForm.controls["email"].hasError("required")) {
      return "this field cannot be empty";
    }

    return this.userForm.controls["email"].hasError("pattern")
      ? "Email id should be of format 'username@domain.com'"
      : "";
  }

  getPasswordError() {
    if (this.userForm.controls["password"].hasError("required")) {
      return "this field cannot be empty";
    }

    return this.userForm.controls["password"].hasError("minlength") ||
      this.userForm.controls["password"].hasError("maxlength")
      ? "password should be between 8 and 16 characters"
      : "";
  }
}
