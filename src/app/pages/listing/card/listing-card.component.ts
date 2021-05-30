import { Patient } from '../../../shared/models/Patient/patient.model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss']
})
export class ListingCardComponent implements OnInit {
  @Input() patient?: Patient;

  constructor() { }

  ngOnInit(): void {
  }
}
