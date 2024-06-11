import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreparadoraPage } from './preparadora.page';

const routes: Routes = [
  {
    path: '',
    component: PreparadoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreparadoraPageRoutingModule {}
