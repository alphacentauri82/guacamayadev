import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guacamaya';
  constructor(public routerService: ScullyRoutesService ) {}
}
