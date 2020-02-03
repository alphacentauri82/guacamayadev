import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guacamaya';
  //Sort elements by orders
  links$ = this.routerService.available$.pipe(
    map(routeList => routeList.sort((a, b) => a.order - b.order))
  );
  constructor(public routerService: ScullyRoutesService ) {}
}
