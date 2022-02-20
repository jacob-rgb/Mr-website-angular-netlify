import { Component, Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from "@angular/router";
import { environment } from "src/environments/environment";

declare let gtag: (property: string, value: any, configs: any) => {};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent {
  title = 'client';
  loading:boolean = true;
  mostrar: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platform: Object, public router:Router ) { 
    this.router.events.subscribe(event => {
      if( event instanceof NavigationEnd) {
        gtag('config', environment.googleAnalyticsiD, {
          page_path: event.urlAfterRedirects
        });
      }
    })
  }

  ngOnInit() {
    if(isPlatformBrowser(this.platform)) {
      this.getMobileOperatingSystem();
    }
  }

  ngAfterViewInit() {
    if(isPlatformBrowser(this.platform)) {
      setTimeout(() => {
      let elem = this.document.querySelector('#loadInit');
     elem?.classList.add('desaparecer');
      
    }, 2000);
    }
  }

  capaImageSlide(): void {

    var objetos: any = this.document.querySelectorAll(".imgBoxCapa .capa1"); 
    var objetos2: any = this.document.querySelectorAll(".imgBoxCapa .capa2");  

    for(var i = 0; i < objetos.length; i++) {
      if(objetos[i].getClientRects()[0]?.top < 500 && objetos[i].getClientRects()[0]?.top > -500) {
        objetos[i].style.transform = `translateX(600px)`;
        objetos2[i].style.transform = `translateX(600px)`;

      } 
    }
  }

  getMobileOperatingSystem() {
    
    var userAgent = window.navigator.userAgent || window.navigator.vendor ;

  
    // Windows Phone debe ir primero porque su UA tambien contiene "Android"
   if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
   }
  
   if (/android/i.test(userAgent)) {
      return "Android";
  }
  
   if (/iPad|iPhone|iPod/.test(userAgent)) {
      const elem = document.querySelector('.divHorz');
      const body = document.querySelector('body');
      
      elem?.classList.add('background-scroll');
      body!.style.backgroundAttachment = 'fixed';
      console.log(body?.style.backgroundAttachment);
    }
  
  return "desconocido";
  }


}
