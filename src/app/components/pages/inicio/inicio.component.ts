import { Component, OnInit, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
@Injectable()
export class InicioComponent implements OnInit {
  mostrar:boolean = true;
  video:boolean = true;
  mostrarContenidoPesado: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platform: Object ) {
  
   }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platform)) {
      scroll(0,0)
        setTimeout(() => {
          this.mostrarcontent()
          this.mostrarContenidoPesado = true;
        })
        
    }
  }

  mostrarcontent(): void {
    var objetos = this.document.querySelectorAll(".mostrar");
    
    var objetosArr = Array.prototype.slice.call(objetos);
    
    if(objetosArr.every((objeto) => { return objeto.classList.contains('animado') })) {
      this.mostrar = false; 
    }  

   for(var i = 0; i < objetos.length; i++) {
       if(objetos[i].getClientRects()[0]?.top < 400 && objetos[i].getClientRects()[0]?.top > -400) {
         objetos[i].classList.add("animado")
       } 
     }
  }


}
