import { ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

/** values of password and confirm password for controls should match */
export const passwordMatchValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get("password");
  const confirmPassword = control.get("confirmPassword");

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { passwordMatch: true }
    : null;
};
