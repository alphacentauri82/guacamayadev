import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from './youtube.component';
import {
  MatIconModule
 } from '@angular/material';

@NgModule({
  declarations: [YoutubeComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    YoutubeComponent
  ]
})
export class YoutubeModule { }
