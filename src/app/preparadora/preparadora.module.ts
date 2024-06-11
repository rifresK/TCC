import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreparadoraPageRoutingModule } from './preparadora-routing.module';

import { PreparadoraPage } from './preparadora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreparadoraPageRoutingModule
  ],
  declarations: [PreparadoraPage]
})
export class PreparadoraPageModule {}
