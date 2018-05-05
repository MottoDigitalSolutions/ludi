import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './home/home.component';
import { PromocionesComponent }        from './promociones/promociones.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'promociones', component: PromocionesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
