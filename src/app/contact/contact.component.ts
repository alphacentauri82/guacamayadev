import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ScullyRoutesService } from '@scullyio/ng-lib'
import * as M from "materialize-css/dist/js/materialize";
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: any;

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });


  constructor(public routerService: ScullyRoutesService, private http: HttpClient) { }

  onSubmit() {

    if(this.contactForm.value.name!='' && this.contactForm.value.email!='' && this.contactForm.value.subject!='' && this.contactForm.value.message!=''){
      const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.contactForm.value.name)
      .append('email', this.contactForm.value.email)
      .append('subject', this.contactForm.value.subject)
      .append('message', this.contactForm.value.message)
      //console.log(body);
      this.http.post("/", body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
      .subscribe(
        res => {},
        err => {
          if (err instanceof ErrorEvent) {
          }else {
            if (err.status === 200) {
              M.toast({html: 'Datos enviados correctamente'});
              this.contactForm.reset();
            }
          }
        }
      );
    }else{
      M.toast({html: 'Por favor, ingrese los campos requeridos'});
    }
  }

  ngOnInit(): void {

    this.contact = {};

    this.routerService.available$.pipe(
      map(routeList => routeList.filter((routerItem) => { return routerItem.route.indexOf("blog/contact") != -1 }))
    ).subscribe(list => {
      this.contact = list[0];
    });

  }

}
