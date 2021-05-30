import { AboutusRoutingModule } from './aboutus-routing.module';
import { ContainerModule } from './../../shared/components/container/container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AboutusComponent],
  imports: [CommonModule, MatCardModule, ContainerModule, AboutusRoutingModule],
  exports: [AboutusComponent],
})
export class AboutusModule {}
