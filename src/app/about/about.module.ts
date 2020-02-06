import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
 } from '@angular/material';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AboutModule { }
