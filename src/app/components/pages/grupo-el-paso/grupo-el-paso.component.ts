import { Component, OnInit, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-grupo-el-paso',
  templateUrl: './grupo-el-paso.component.html',
  styleUrls: ['./grupo-el-paso.component.scss']
})
@Injectable()
export class GrupoElPasoComponent implements OnInit {
  mostrar: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platform: Object) { }

  ngOnInit(): void {
      if(isPlatformBrowser(this.platform)) {
        window.scroll(0, 0);
        setTimeout(() => {
          this.mostrarcontent()
        }, 200)
      }
  }

  mostrarcontent(): void {

    var objetos = this.document.querySelectorAll(".row");  
    
    var objetosArr = Array.prototype.slice.call(objetos);
    
    if(objetosArr.every((objeto) => { return objeto.classList.contains('animado') })) {
      this.mostrar = false; 
    }     
    
    for(var i = 0; i < objetos.length; i++) {
      if(objetos[i].getClientRects()[0]?.top < 500 && objetos[i].getClientRects()[0]?.top > -500) {
        objetos[i].classList.add("animado")
      } 
    }
  }
}
