import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListingComponent } from './listing.component';
import { ListingCardModule } from '../card/listing-card.module';
import { ListingAddModule } from '../add/listing-add.module';
import { ListingRoutingModule } from './listing-routing.module';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule, ListingRoutingModule, MatToolbarModule, ContainerModule, ListingCardModule, MatButtonModule, MatIconModule, ListingAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule
  ]
})
export class ListingModule { }
