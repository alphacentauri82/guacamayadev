import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib'
import { map } from 'rxjs/operators';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
import { transAnimation } from './animations';

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

export class AppComponent {
  title = 'guacamaya';
  //Sort elements by orders
  //Here you can filter the links by some pattern
  links$ = this.routerService.available$.pipe(
    map(routeList => routeList.sort((a, b) => a.order - b.order))
  );
  constructor(public routerService: ScullyRoutesService ) {}
}
