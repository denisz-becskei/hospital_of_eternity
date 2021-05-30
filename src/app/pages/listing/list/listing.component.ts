import { Patient } from './../../../shared/models/Patient/patient.model';
import { FbBaseService } from '../../../services/fb-base.service';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { ListingAddComponent } from '../add/listing-add.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  list$: Observable<Patient[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<Patient>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('patients').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ListingAddComponent, {});
    const infections = this.service.get("infections");
    var amount = 0;
    var infection: any;
    infections.forEach(function (value) {
      amount = value.length;
      infection = value[Math.floor(Math.random() * (amount - 1 + 1))].name;
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((patient: Patient) => {
      console.log(patient);
      if (patient?.name) {
        patient.infection = infection;
        console.log(infections);
        this.service.add('patients', patient).then(id => { console.log(id); });
      }
    }, err => {
      console.warn(err);
    });
  }

}
