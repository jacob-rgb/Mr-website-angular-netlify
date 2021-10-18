import { Component, OnInit, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dibujos',
  templateUrl: './dibujos.component.html',
  styleUrls: ['./dibujos.component.scss']
})
@Injectable()
export class DibujosComponent implements OnInit {
    mostrar:boolean = true
  p:number = 1;
  obras = [
   {
       "titulo": "Serigrafía Roja y Amarilla",
       "year": "",
       "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678193/obras%20MR/dibujos/Serigrafia_roja_y_amarilla_s6rpyp.jpg", 
   },
   {
       "titulo": "Dibujo (Gal. L.N)",
       "year": "",
       "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678193/obras%20MR/dibujos/Dibujo_Gal._L.N._zlwahi.jpg",
   },
   {
       "titulo": "Dibujo (Gal. L.N)",
       "year": "",
       "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678193/obras%20MR/dibujos/Dibujo_Gal._L.N._hoyg6a.png",
     
   },
   {
       "titulo": "Dibujo ",
       "year": "1994",
       "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678192/obras%20MR/dibujos/Dibujo_SinT%C3%ADtulo_1994_uww2qi.jpg",
   },
   {
       "titulo": "Estela Segaliana",
       "year": "1974",
       "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678192/obras%20MR/dibujos/Estela_Segaliana_X_1974_ifpmpk.jpg",
     
   },
   {
       "titulo": "Dibujo (Etiqueta Enate)",
       "year": "1994",
       "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678192/obras%20MR/dibujos/Dibujo_sin_Titulo_etiqu._Enate_1994_ta1w0l.jpg",
     
   },
   {
       "titulo": "Dibu S.T",
       "year": "1994",
       "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678192/obras%20MR/dibujos/Dibujo_S.T._1994_1_lr6fn6.jpg",
     
   },
   {
       "titulo": "Papel Japonés",
       "year": "1968",
       "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678192/obras%20MR/dibujos/Dibujo_papel_japon%C3%A9s_1968_rbpjvu.jpg",
     
   },
   {
       "titulo": "Dibujo de Granada",
       "year": "1965",
       "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678192/obras%20MR/dibujos/Dibujo_Granada_1965_rfvwyo.jpg",
     
   },
   {
       "titulo": "Dibujo (Gal. L.N)",
       "year": "",
       "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678192/obras%20MR/dibujos/Dibujo_Gal._L.Navarro_ps44z5.jpg",
     
   },
   {
       "titulo": "Olas (Gal. L.N)",
       "year": "",
       "imagen": "http://manuelrivera.net/images/obra/dibujo/480.jpg",
     
   },
   {
     "titulo": "Azul Amar y Verde",
     "year": "1994",
     "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678192/obras%20MR/dibujos/Dibujo_S.T._azul_amar_y_verde_1994_2_eqygod.jpg",
     
 },
 {
     "titulo": "Mar Azul",
     "year": "",
     "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678192/obras%20MR/dibujos/Dibujo_mar_azul_G.L.N._sqsm08.jpg",
     
 },
 {
     "titulo": "Dibujo (Gal. L.N)",
     "year": "",
     "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1625678191/obras%20MR/dibujos/Dibujo_Galeria_L.N._wwy4t2.jpg",
     
 }

]

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platform: Object) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platform)) {
      scrollTo(0, 0)
         setTimeout(() => {
           this.mostrarcontent()
         },200)
    }
  }

  mostrarcontent(altura: number = 500 ): void {
    
    var objetos = this.document.querySelectorAll(".card");  
    
    var objetosArr = Array.prototype.slice.call(objetos);
    
    if(objetosArr.every((objeto) => { return objeto.classList.contains('animado') })) {
      this.mostrar = false; 
    }     
      
    for(var i = 0; i < objetos.length; i++) {
      if(objetos[i].getClientRects()[0]?.top < altura && objetos[i].getClientRects()[0]?.top > -500) {
        objetos[i].classList.add("animado")
      } 
    }
  }

  cambioDePagina(p: number) {
    this.p = p;
    scrollTo(0, 0);
    this.mostrar = true;
    setTimeout(() => {
        this.mostrarcontent();
    }, 0);
  }

}
