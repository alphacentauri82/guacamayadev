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
       //console.log(route);
       return route.name == "about";
      }) 
    ),
    map(routeList => {
      let data = [];
      routeList.forEach(element => {
        for(var b=0; b < element.bios.length; b++){
          element.bios[b].resume = element.bios[b].resume.replace(/\n/g,'<br />');
        }
        data.push(element);
      })
      return data;
    })
  );

  ngOnInit(): void {
  }

}
