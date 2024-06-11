import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarModelsPage } from './car-models.page';

const routes: Routes = [
  {
    path: '',
    component: CarModelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarModelsPageRoutingModule {}
