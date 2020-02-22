import { Component, OnInit } from "@angular/core";
import {
  ScullyRoutesService,
  TransferStateService,
  isScullyGenerated
} from "@scullyio/ng-lib";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    public routerService: ScullyRoutesService,
    private transferState: TransferStateService
  ) {}

  home_pipe$ = isScullyGenerated()
    ? this.transferState.getState("homeRoute")
    : this.routerService.available$.pipe(
        map(routeList =>
          routeList.filter(route => {
            return route.name == "home";
          })
        ),
        tap(home => this.transferState.setState("homeRoute", home))
      );

  ngOnInit(): void {}
}
