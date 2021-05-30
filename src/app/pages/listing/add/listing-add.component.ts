import { Patient } from './../../../shared/models/Patient/patient.model';
import { FbBaseService } from './../../../services/fb-base.service';
import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listing-add',
  templateUrl: './listing-add.component.html',
  styleUrls: ['./listing-add.component.scss']
})
export class ListingAddComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl(),
    birthDate: new FormControl(),
  });

  constructor(public dialogRef: MatDialogRef<ListingAddComponent>) { }

}
