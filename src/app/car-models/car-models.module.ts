import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarModelsPageRoutingModule } from './car-models-routing.module';

import { CarModelsPage } from './car-models.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarModelsPageRoutingModule
  ],
  declarations: [CarModelsPage]
})
export class CarModelsPageModule {}
