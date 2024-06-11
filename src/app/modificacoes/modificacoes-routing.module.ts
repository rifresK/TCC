import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificacoesPage } from './modificacoes.page';

const routes: Routes = [
  {
    path: '',
    component: ModificacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificacoesPageRoutingModule {}
