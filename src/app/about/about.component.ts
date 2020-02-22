import { Component, OnInit } from "@angular/core";
import {
  isScullyGenerated,
  ScullyRoutesService,
  TransferStateService
} from "@scullyio/ng-lib";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor(
    public routerService: ScullyRoutesService,
    private transferState: TransferStateService
  ) {}

  about_pipe$ = isScullyGenerated()
    ? this.transferState.getState("aboutRoute")
    : this.routerService.available$.pipe(
        map(routeList =>
          routeList.filter(route => {
            //console.log(route);
            return route.name == "about";
          })
        ),
        map(routeList => {
          let data = [];
          routeList.forEach(element => {
            for (var b = 0; b < element.bios.length; b++) {
              element.bios[b].resume = element.bios[b].resume.replace(
                /\n/g,
                "<br />"
              );
            }
            data.push(element);
          });
          return data;
        }),
        tap(data => this.transferState.setState("aboutRoute", data))
      );

  ngOnInit(): void {}
}
