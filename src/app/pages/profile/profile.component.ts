import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { getAddressForm } from 'src/app/shared/forms/address.form';
import { getPersonForm } from 'src/app/shared/forms/person.form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', './../../shared/styles/common.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup = getPersonForm();

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.authenticated()) {
      this.router.navigateByUrl('/home');
    }
    this.initForm();
  }

  initForm(): void {
    const idFormArray = this.form.get('identifier') as FormArray;
  }

  get getAddress(): FormArray {
    return this.form?.get('address') as FormArray;
  }

  addAddress(): void {
    const idFormArray = this.form?.get('address') as FormArray;
    idFormArray.push(getAddressForm());
  }

  removeAddress(index: number): void {
    const formArray = this.form?.get('address') as FormArray;
    formArray.removeAt(index);
  }

  log(): void {
    console.log(this.form?.value);
  }
}
