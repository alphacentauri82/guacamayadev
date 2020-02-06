import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ScullyRoutesService } from '@scullyio/ng-lib'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public routerService: ScullyRoutesService) { }

  about_pipe$ = this.routerService.available$.pipe(
    map(routeList => routeList.filter((route) => {
       console.log(route);
       return route.name == "about";
      }) 
    )
  );

  ngOnInit(): void {
  }

}
