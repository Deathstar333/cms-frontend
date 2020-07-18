import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/_services/user.service";
import { passwordMatchValidator } from "src/app/_shared/password-match.directive";
import { UserDetails } from "src/app/_models/user-details";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group(
    {
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
      confirmPassword: ["", [Validators.required]],
    },
    { validators: passwordMatchValidator }
  );

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.registerForm.value);
    const user: UserDetails = new UserDetails(
      this.registerForm.get("email").value,
      this.registerForm.get("password").value
    );
    this.userService.addUser(user).subscribe();
  }

  getEmailError() {
    if (this.registerForm.controls["email"].hasError("required")) {
      return "this field cannot be empty";
    }

    return this.registerForm.controls["email"].hasError("pattern")
      ? "Email id should be of format 'username@domain.com'"
      : "";
  }

  getPasswordError() {
    if (this.registerForm.controls["password"].hasError("required")) {
      return "this field cannot be empty";
    }

    return this.registerForm.controls["password"].hasError("minlength") ||
      this.registerForm.controls["password"].hasError("maxlength")
      ? "password should be between 8 and 16 characters"
      : "";
  }
}
