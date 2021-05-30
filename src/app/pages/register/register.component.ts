import { FbBaseService } from './../../services/fb-base.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../../shared/styles/common.scss']
})
export class RegisterComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  error = false;

  constructor(private router: Router, private authService: AuthService, private fb: FbBaseService<any>) { }

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.register();
  }

  passwordStrength(): string {
    if (this.form.value.password1.length >= 6 && this.hasUpperCase(this.form.value.password1) && this.hasNumbers(this.form.value.password1)) {
      return "Strong as Hell!";
    } else if (this.form.value.password1.length >= 6 && this.hasUpperCase(this.form.value.password1)) {
      return "Average, could be better";
    } else if (this.form.value.password1.length >= 6) {
      return "Weak, but acceptable";
    } else if (this.form.value.password1.length < 6 && this.form.value.password1.length > 0) {
      return "Password too weak";
    } else {
      return "";
    }
  }

  passwordEquals(): string {
    if (this.form.value.password1 === this.form.value.password2) {
      return "The passwords match!";
    } else {
      return "";
    }
  }

  hasUpperCase(str: string) {
    return (/[A-Z]/.test(str));
  }

  hasNumbers(str: string) {
    return (/[0-9]/.test(str));
  }

  register(): void {
    this.error = false;
    if (this.form.valid) {
      if (this.form.value.password1 === this.form.value.password2) {
        console.log(this.form.value);
        this.authService.createUser(this.form.value.email, this.form.value.password1, this.form.value.username).then(() =>
        this.authService.login(this.form.value.email, this.form.value.password1)).then(() =>
        {
          this.authService.getCurrentUser().uid = null;
          this.fb.add("users", this.authService.getCurrentUser());
        }).then(() => {
          this.authService.logout()
        });
        this.router.navigateByUrl('/home/login');
        return;
      }
    }
    this.error = true;
  }

}
