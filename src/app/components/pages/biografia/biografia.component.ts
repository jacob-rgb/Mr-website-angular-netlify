import { Component, OnInit, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable()
@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.scss']
})
export class BiografiaComponent implements OnInit {

  mostrar:boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document,  @Inject(PLATFORM_ID) private platform: Object) { }

  
  ngOnInit(): void {
    if(isPlatformBrowser(this.platform)) {
      scrollTo(0, 0)
         setTimeout(() => {
           this.mostrarcontent()
         }, 200)
    }
  }

  // Función encargada de que los elementos aparezcan con la animación de desplazamineto
  mostrarcontent(): void {

    var objetos = this.document.querySelectorAll("mzd-timeline-content");   
    
    var objetosArr = Array.prototype.slice.call(objetos);
    
    if(objetosArr.every((objeto) => { return objeto.classList.contains('animado') })) {
      this.mostrar = false; 
    }    
  
    for(var i = 0; i < objetos.length; i++) {
      if(objetos[i].getClientRects()[0].top < 500  && objetos[i].getClientRects()[0].top > -500) {
        objetos[i].classList.remove("desanimado");
        objetos[i].classList.add("animado");
        objetos[i].classList.add(i % 2 == 0 ? "mostrarizquierda" : "mostrarderecha");
      } 
    }
  }
}
