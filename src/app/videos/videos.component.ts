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

  /*videos: any;
  next: string = "";
  prev: string = "";*/

  videos: any;
  home: any;

  constructor(public routerService: ScullyRoutesService) { }

  ngOnInit(): void {

    this.videos = {};
    this.home = {};

    this.routerService.available$.pipe(
      map(routeList => routeList.filter((routerItem) => { return routerItem.route.indexOf("blog/videos") != -1 }))
    ).subscribe(list => {
      this.videos = list[0];
    });

    this.routerService.available$.pipe(
      map(routeList => routeList.filter((routerItem) => { return routerItem.route.indexOf("blog/home") != -1 }))
    ).subscribe(list => {
      this.home = list[0];
    });

    /*this.videos = [];
    this.route.queryParams.subscribe(params => {

      let options = {channelId: "UC7WVhpS_lwJot0DBaEnIccg", maxResults: 10};
      if(params.page !== null && params.page !== undefined)
        options["page"] = params.page
      
      this.youTubeService.getVideos(options)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(list => {
          if(list["prevPageToken"] !== null && list["prevPageToken"] !== undefined)
            this.prev = "/videos?page=" + list["prevPageToken"];
          if(list["nextPageToken"] !== null && list["nextPageToken"] !== undefined)
            this.next = "/videos?page=" + list["nextPageToken"];
          for(let item of list["items"]) {
            this.videos.push(item);
          }
      });
    });*/
  }

}
