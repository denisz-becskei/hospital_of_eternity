import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TopAndNavModule } from 'src/app/shared/components/top-and-nav/top-and-nav.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TopAndNavModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
