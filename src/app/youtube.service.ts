import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  key: string = "AIzaSyDz6MtZk1fIPlaBuifbeVbrFDGMVUAedvI"

  constructor(public http: HttpClient) { }

  getVideos(options): Observable<Object> {
    let page = '';
    if(options.page !== null && options.page !== undefined)
      page = '&pageToken=' + options.page;
    let request = 'https://www.googleapis.com/youtube/v3/search?key=' + this.key + '&channelId=' + options.channelId + '&order=date' + page + '&part=snippet &type=video,id&maxResults=' + options.maxResults;
    return this.http.get(request)
           .pipe(map((response) => {
             //console.log(response);
             return response;
           }));
  }

}
