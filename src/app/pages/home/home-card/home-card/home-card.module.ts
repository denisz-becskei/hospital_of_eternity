import { RouterModule } from '@angular/router';
import { HomeCardRoutingModule } from './home-card-routing.module';
import { ContainerModule } from './../../../../shared/components/container/container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeCardComponent } from './home-card.component';



@NgModule({
  declarations: [HomeCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ContainerModule,
    RouterModule,
    HomeCardRoutingModule
  ],
  exports: [
    HomeCardComponent
  ]
})
export class HomeCardModule { }
