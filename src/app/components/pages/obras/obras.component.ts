import { Component, OnInit, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss']
})
@Injectable()
export class ObrasComponent implements OnInit {
  mostrar:boolean = true;
  p:number = 1;
   obras: any[] = [
    {
        "titulo": "Mutaciones VII",
        "year": "1990",
        "medidas": "130 X 89",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569916/obras%20MR/telas%20metalicas/MUTACIONES_VII._IX-X-1990._130_X_89_CM._P%C3%A1g._110_cr_1_j2ybio.jpg",
        "descripcion": "110" 
    },
    {
        "titulo": "Mutaciones III",
        "year": "1989",
        "medidas": "162 X 114",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569916/obras%20MR/telas%20metalicas/MUTACIONES_III._IX-X-1989._162_X_114_cm._P%C3%A1g._499._cr._1-min_1_1_dgmdmi.jpg",
        "descripcion": "499" 
    },
    {
        "titulo": "Metamorfosis",
        "year": "1959",
        "medidas": "97 X 146",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569915/obras%20MR/telas%20metalicas/Metamorfosis._1959._97_x_146_cm._P%C3%A1g._142_Cat%C3%A1logo_Razonado.jpg_1_1_y8bjtj.jpg",
        "descripcion": "142" 
    },
    {
        "titulo": "Mutación II",
        "year": "1982",
        "medidas": "80 X 80 X 80",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569915/obras%20MR/telas%20metalicas/Mutaci%C3%B3n_II._Boceto_para_escultura._12-1982._60_x_60_x_60_cm._P%C3%A1g._422_cr._expa7k.jpg",
        "descripcion": "442" 
    },
    {
        "titulo": "Metamorfosis 'El Brujo'",
        "year": "1961",
        "medidas": "99.5 X 72.5 X 6",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569915/obras%20MR/telas%20metalicas/METAMORFOSIS_EL_BRUJO_._1961._99_5_X_72_5_X_6_CM._P%C3%A1g._180_cr._1_1_nclnq4.jpg",
        "descripcion": "180" 
    },
    {
        "titulo": "Metamorfosis 'Parca'",
        "year": "1961",
        "medidas": "100 X 72.5",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569915/obras%20MR/telas%20metalicas/METAMORFOSIS_PARCA_._1961._100_x_72_5_cm._P%C3%A1g._189_cr._1_1_lfnsbd.jpg",
        "descripcion": "189" 
    },
    {
        "titulo": "Metamorfosis 'Pirata'",
        "year": "1961",
        "medidas": "100 X 63",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569915/obras%20MR/telas%20metalicas/Metamorfosis_pirata._1961._100_x_63_cm._P%C3%A1g._189._Cr._efwubt.jpg",
        "descripcion": "189" 
    },
    {
        "titulo": "La Voz Quebrada",
        "year": "1991",
        "medidas": "Tríptico: 81 X 100 89 X 130 81 X 100",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569918/obras%20MR/telas%20metalicas/LA_VOZ_QUEBRADA._IX-1991._TR%C3%8DPTICO_81_X_100_CM._89_X_130_CM._81_X_100_CM._Pag._520._cr._1_1_iefvvq.jpg",
        "descripcion": "520" 
    },
    {
        "titulo": "La Puerta del Agua",
        "year": "1991",
        "medidas": "100 X 81",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569918/obras%20MR/telas%20metalicas/LA_PUERTA_DEL_AGUA_3._Iv-1991._100_X_81_CM._P%C3%A1g._518_cr._1_lfijvk.jpg",
        "descripcion": "518" 
    },
    {
        "titulo": "Exvoto",
        "year": "1979",
        "medidas": " 100 X 81",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569918/obras%20MR/telas%20metalicas/EXVOTO_1._1979._100_X_81_CM._p%C3%81G._397_CR.-min_1_om1cd5.jpg",
        "descripcion": "397" 
    },
    {
        "titulo": "Estorzuelo nª38",
        "year": "1993",
        "medidas": "",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569918/obras%20MR/telas%20metalicas/Estorzuelo_n%C2%BA_38_1993_copia_jlv0wv.jpg",
        "descripcion": "" 
    },
    {
      "titulo": "Homenaje a Manuel de Falla",
      "year": "1978",
      "medidas": "114 X 162",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569918/obras%20MR/telas%20metalicas/HOMENAJE_A_MANUEL_DE_FALLA._1978._114_X_162_CM._P%C3%A1g._389._cr_acw7su.jpg",
      "descripcion": "389" 
  },
  {
      "titulo": "Esto Pasó Como Lo Estoy Contando ",
      "year": "1983",
      "medidas": "114 X 324",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/Esto_pas%C3%B3_como_lo_estoy_contando_1983._114_324_cm._P%C3%A1g_428._Cr._j1ydvt.jpg",
      "descripcion": "428" 
  },
  {
      "titulo": "Espejo Roto XXII",
      "year": "1987",
      "medidas": "60 X 50",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/ESPEJO_ROTO_XXII._XII-1987._60_X_50_CM._ext_45_x_35_int_._P%C3%A1g._469_cr_1-min_1_pftqwu.jpg",
      "descripcion": "469" 
  },
  {
      "titulo": "Espejo Para Una Novia III",
      "year": "1976",
      "medidas": "100 X 81",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/ESPEJO_PARA_UNA_NOVIA_III._1976._100_x_81_cm._P%C3%A1g._374_cr._1-min_1_1_zrkxyf.jpg",
      "descripcion": "374" 
  },
  {
      "titulo": "Espejo Para Una Novia IV",
      "year": "1976",
      "medidas": "100 X 81",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/ESPEJO_PARA_UNA_NOVIA_IV._1976._100_x_81_cm._P%C3%A1g._374_cr._1_4_lr2h2n.jpg",
      "descripcion": "374" 
  },
  {
      "titulo": "Espejo Traje De Noche Para La Muerte",
      "year": "1981",
      "medidas": "Tríptico: 114 X 162 162 X 114 114 X 162",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/ESPEJO-TRAJE_DE_NOCHE_PARA_LA_MUERTE._X-1980-I-1981._Tr%C3%ADptico_114_x_162_cm_162_x_114_cm_114_x_162_cm._P%C3%A1g._403_cr._1-min_1_1_ckuqbd.jpg",
      "descripcion": "403" 
  },
  {
      "titulo": "Espejo Para Una Tarde De Septiembre",
      "year": "1965",
      "medidas": "129.5 X 89",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/ESPEJO_PARA_UNA_TARDE_DE_SEPTIEMBRE._1965._129_5_X_89_CM._P%C3%A1g._248._cr_f0otgf.jpg",
      "descripcion": "248" 
  },
  {
      "titulo": "Espejo Para Una Novia II",
      "year": "1976",
      "medidas": "100 X 81",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/ESPEJO_PARA_UNA_NOVIA_II._1976._100_X_81_CM._P%C3%A1g._373_cr._1-min_1_1_neaqwm.jpg",
      "descripcion": "373" 
  },
  {
      "titulo": "Espejo Para El Viento Del Trigal",
      "year": "1967",
      "medidas": "80 X 130",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/ESPEJO_PARA_EL_VIENTO_DEL_TRIGAL._1967-1970._89_x_130_cm._P%C3%A1g._302_.cr._1_ybxm67.jpg",
      "descripcion": "302" 
  },
  {
      "titulo": "Espejo Encendido",
      "year": "1989",
      "medidas": "81 X 100",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/Espejo_encendido._1989._81_x_100_cm._P%C3%A1g.490._cr._1_1_ipreoa.jpg",
      "descripcion": "490" 
  },
  {
      "titulo": "Espejo Para Un Son De Campanas III",
      "year": "1974",
      "medidas": "114 X 325",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/ESPEJO_PARA_UN_SON_DE_CAMPANAS_III._1974._D%C3%ADptico._114_x_325_cm._114_x_162_5_cm._P%C3%A1g.350_cr._1_avuzqg.jpg",
      "descripcion": "350" 
  },
  {
      "titulo": "Espejo Encendido para Mary",
      "year": "1989",
      "medidas": "100 X 81",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/Espejo_encendido_para_Mary_1989._100_x_81_cm._P%C3%A1g_490._Cr._rx4yvx.jpg",
      "descripcion": "490" 
  },
  {
      "titulo": "Espejo Del Bronce",
      "year": "1965",
      "medidas": "129.5 X 89",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/ESPEJO_DEL_BRONCE._1965._129_5_X_89_CM._P%C3%A1g._242_cr._1_1_dzmbgf.jpg",
      "descripcion": "242" 
  },
  {
      "titulo": "Espejo Del Sol",
      "year": "1966",
      "medidas": "161.8 X 114 X 11.5",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569917/obras%20MR/telas%20metalicas/ESPEJO_DEL_SOL._1966._161_8_x_114_x_11_5_cm._P%C3%A1g._256_cr._1_1_p94fyr.jpg",
      "descripcion": "256" 
   },
   {
      "titulo": "Espejo Cruzado",
      "year": "1973",
      "medidas": "81 X 100 ",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569916/obras%20MR/telas%20metalicas/Espejo_cruzado_1973._81_x_100_cm._P%C3%A1g._332._Cr._m7gla9.jpg",
      "descripcion": "332" 
   },
   {
      "titulo": "Espejo Sonámbulo II",
      "year": "1989",
      "medidas": "130 x 89",
      "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569916/obras%20MR/telas%20metalicas/Esp._son%C3%A1mbulo_n%C2%BA_2_1989._130_x_89_cm._P%C3%A1g_494._Cr._oegbmi.jpg",
      "descripcion": "494" 
    },
    {
        "titulo": "Espejo Para Soñar VI",
        "year": "1990",
        "medidas": "60 X 50",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569916/obras%20MR/telas%20metalicas/Esp._para_so%C3%B1ar_VI_1990._60_x_50_cm_Ext._45_x_35_cm_Int._P%C3%A1g_506_cr._gqldzd.jpg",
        "descripcion": "506" 
     },
     {
        "titulo": "Caleidoscopio",
        "year": "1981",
        "medidas": "Políptico: 4 obras de 100 X 81",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569916/obras%20MR/telas%20metalicas/CALEIDOSCOPIO._I-1981._P%C3%B3l%C3%ADptico_4_obras_de_100_x_81_cm._P%C3%A1g._410._cr_r5fyib.jpg",
        "descripcion": "410" 
      },
      {
        "titulo": "Espejo Para la Fiesta Del Lobo",
        "year": "1992",
        "medidas": "130 X 89",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569916/obras%20MR/telas%20metalicas/Esp._para_la_fiesta_del_lobo_1992._130_x_89_cm._P%C3%A1g_527_cr._k96snj.jpg",
        "descripcion": "527" 
     },
      {
        "titulo": "Alberca Soñando",
        "year": "1984",
        "medidas": " 130 x 89",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569916/obras%20MR/telas%20metalicas/Alberca_so%C3%B1ando_1984._130_x_89_cm._P%C3%A1g_430_cr._i2mlhp.jpg",
        "descripcion": "430" 
     },
     {
        "titulo": "Alberca en Otoño",
        "year": "1985",
        "medidas": " 98.5 X 140 X 20",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569916/obras%20MR/telas%20metalicas/ALBERCA_EN_OTO%C3%91O._1985._98_5_X_140_X_20_CM._P%C3%A1g._436_cr.-min_1_coywi5.jpg",
        "descripcion": "436" 
      },
      {
        "titulo": "Alberca Amaneciendo",
        "year": "1984",
        "medidas": " 110 X 100 X 25",
        "imagen": "https://res.cloudinary.com/manuel-rivera-website/image/upload/v1626569916/obras%20MR/telas%20metalicas/ALBERCA_AMANECIENDO._XII-1984._110_X_100_X_25_CM._1-min_1_onmqnc.jpg",
        "descripcion": "" 
      },
  
]

 load:boolean = false;


  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platform: Object) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platform)) {
      scrollTo(0, 0)
         setTimeout(() => {
           this.mostrarcontentt()
           this.load = true;
         },2000)
    }
  }



  mostrarcontentt(altura: number = 400 ): void {

    if(this.load === false) {
      scrollTo(0, 0)
    }
    
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
      this.mostrar = true;
      scrollTo(0, 0);
      this.p = p;
      setTimeout(() => {
        this.mostrarcontentt();
    }, 0); 
  }

}
