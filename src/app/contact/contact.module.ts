import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {
  MatIconModule
 } from '@angular/material';

 import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
