import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ScullyRoutesService } from '@scullyio/ng-lib'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: any;

  constructor(public routerService: ScullyRoutesService) { }

  ngOnInit(): void {
    this.contact = {};

    this.routerService.available$.pipe(
      map(routeList => routeList.filter((routerItem) => { return routerItem.route.indexOf("blog/contact") != -1 }))
    ).subscribe(list => {
      this.contact = list[0];
    });

  }

}
