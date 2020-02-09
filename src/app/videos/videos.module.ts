import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { YoutubeModule } from '../youtube/youtube.module'
import { YoutubeComponent } from '../youtube/youtube.component'

@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    YoutubeModule
  ]
})
export class VideosModule { }
