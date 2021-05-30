import { AuthService } from 'src/app/services/auth.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './../../shared/styles/common.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });
  alertMessage = '';
  alertsList: any = {
    user: () => 'Incorrect E-mail or Password.',
    service: () => 'Service Unavailable.',
    false: () => ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.logout();
  }

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.login();
  }

  login(): void {
    if (this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value.email, this.form.value.password).then(
      result => {
        console.log(result);
        this.router.navigateByUrl('/home');
      },
      (error) => {
        this.alertMessage = (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
          ? this.alertsList.user() : this.alertsList.service();
      }
    );
  }
}
