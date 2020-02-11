import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../youtube.service';
import { takeUntil, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ScullyRoutesService } from '@scullyio/ng-lib'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  //episodes: any;

  video_pipe$ = this.routerService.available$.pipe(
    map(routeList => routeList.filter((route) => {
       return route.route.indexOf("blog/videos") !== -1;
      }) 
    )
  );
  
  constructor(public routerService: ScullyRoutesService) { }

  ngOnInit(): void {

    //this.episodes = {};

    /*this.routerService.available$.pipe(
      map(routeList => routeList.filter((routerItem) => { return routerItem.route.indexOf("blog/videos") != -1 }))
    ).subscribe(list => {
      this.episodes = list[0];
    });*/
  }

}
