import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from './youtube.component';


@NgModule({
  declarations: [YoutubeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    YoutubeComponent
  ]
})
export class YoutubeModule { }
