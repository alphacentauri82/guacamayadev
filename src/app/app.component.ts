import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib'
import { map } from 'rxjs/operators';
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
  //Sort elements by orders
  //Here you can filter the links by some pattern
  links$ = this.routerService.available$.pipe(
    map(routeList => routeList.sort((a, b) => a.order - b.order)),
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
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
        var pelems = document.querySelectorAll('.parallax');
        var pinstances = M.Parallax.init(pelems, {});
      });
  }
  
}
