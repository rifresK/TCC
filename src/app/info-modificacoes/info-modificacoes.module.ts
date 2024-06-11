import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoModificacoesPageRoutingModule } from './info-modificacoes-routing.module';

import { InfoModificacoesPage } from './info-modificacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoModificacoesPageRoutingModule
  ],
  declarations: [InfoModificacoesPage]
})
export class InfoModificacoesPageModule {}
