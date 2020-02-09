import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../youtube.service';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-youtubeon',
  templateUrl: './youtubeon.component.html',
  styleUrls: ['./youtubeon.component.scss']
})
export class YoutubeonComponent implements OnInit {

  videos: any;
  next: string = "";
  prev: string = "";

  //Params for the component
  @Input()
  channel: string;

  @Input()
  items: string;

  private unsubscribe$: Observable<void> = new Observable();

  constructor(private youTubeService: YoutubeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.videos = [];
    this.route.queryParams.subscribe(params => {

      let options = {channelId: this.channel, maxResults: this.items};
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
    });
  }

}
