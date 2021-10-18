import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiografiaComponent } from './components/pages/biografia/biografia.component';
import { DibujosComponent } from './components/pages/dibujos/dibujos.component';
import { GrupoElPasoComponent } from './components/pages/grupo-el-paso/grupo-el-paso.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { ObrasComponent } from './components/pages/obras/obras.component';
import { PoliticasComponent } from './components/pages/politicas/politicas.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'biografia', component: BiografiaComponent, data: { title: 'Biografía Manuel Rivera - Vida del artista'}},
  {path: 'dibujos', component: DibujosComponent , data: { title: 'Dibujos y Obra Gráfica - Manuel Rivera'}},
  {path: 'grupo-el-paso', component: GrupoElPasoComponent, data: { title: 'Grupo El Paso - Manuel Rivera'}},
  {path: 'inicio', component: InicioComponent, data: { title: 'Manuel Rivera - Artista Español'}},
  {path: 'politicas', component: PoliticasComponent, data: { title:"Políticas de Privacidad y Derechos de imagen" }},
  {path: 'obras', component: ObrasComponent, data: { title: 'Telas Metálicas - Manuel Rivera '}},
  {path: '**', redirectTo:'/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
