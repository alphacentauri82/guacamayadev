import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib'
import { map, filter } from 'rxjs/operators';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
      transition(':leave',animate(600, style({opacity: 0})))
    ])
  ]
})

export class AppComponent implements OnInit{
  title = 'guacamaya';
  isHome: string = "no";
  //Sort elements by orders
  //Here you can filter the links by some pattern
  links$ = this.routerService.available$.pipe(
    map(routeList => routeList.sort((a, b) => a.order - b.order)),
    map(routeList => routeList.filter((routerItem) => { return routerItem.route.indexOf("blog") != -1 })), 
    map(routeList => {
      let data = [];
      routeList.forEach(element => {
        data.push({route: element.route.replace(/\/blog/,''), title: element.title});
      })
      return data;
    })
  );

  constructor(public routerService: ScullyRoutesService) {}

  ngOnInit(){
      let pattern = /about|videos|contact/;
      if(pattern.test(window.location.href) !==true )
        this.isHome = "yes";
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
        var pelems = document.querySelectorAll('.parallax');
        var pinstances = M.Parallax.init(pelems, {});
      });
  }
  
}
