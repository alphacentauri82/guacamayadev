import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
//import { BlogModule } from '../blog/blog.module'
import { YoutubeModule } from '../youtube/youtube.module'
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
 } from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    YoutubeModule,
    NgxTwitterTimelineModule
    //BlogModule
  ]
})
export class HomeModule { }
