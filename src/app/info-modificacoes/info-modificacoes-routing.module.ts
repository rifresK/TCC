import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoModificacoesPage } from './info-modificacoes.page';

const routes: Routes = [
  {
    path: '',
    component: InfoModificacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoModificacoesPageRoutingModule {}
