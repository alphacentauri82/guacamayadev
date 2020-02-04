import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib'
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public routerService: ScullyRoutesService) { 
  }

  home_pipe$ = this.routerService.available$.pipe(
    map(routeList => routeList.filter((route) => {
       console.log(route);
       return route.name == "home";
      }) 
    )
  );

  ngOnInit(): void {
  }

}
