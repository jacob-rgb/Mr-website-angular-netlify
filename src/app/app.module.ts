import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MzdTimelineModule } from 'ngx-mzd-timeline';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BiografiaComponent } from './components/pages/biografia/biografia.component';
import { CarruselComponent } from './components/shared/carrusel/carrusel.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GrupoElPasoComponent } from './components/pages/grupo-el-paso/grupo-el-paso.component';
import { ObrasComponent } from './components/pages/obras/obras.component';
import { DibujosComponent } from './components/pages/dibujos/dibujos.component';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from './components/shared/swiper/swiper.component';
import { SwiperCubeComponent } from './components/shared/swiper-cube/swiper-cube.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PoliticasComponent } from './components/pages/politicas/politicas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    CarruselComponent,
    FooterComponent,
    BiografiaComponent,
    GrupoElPasoComponent,
    ObrasComponent,
    DibujosComponent,
    SwiperComponent,
    SwiperCubeComponent,
    PoliticasComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MzdTimelineModule,
    NgxPaginationModule,
    SwiperModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
