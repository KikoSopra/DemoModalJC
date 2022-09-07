import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonComponent } from './components/boton/boton.component';
import { Boton2Component } from './components/boton2/boton2.component';
import { Boton3Component } from './components/boton3/boton3.component';

const routes: Routes = [
  {
    path: 'modal',
    component: BotonComponent,
  },
  {
    path: 'modal2',
    component: Boton2Component,
  },
  {
    path: 'modal3',
    component: Boton3Component,
  },
  { path: '**', redirectTo: 'modal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
