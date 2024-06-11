import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ModificacoesPage } from './modificacoes.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule, // Importe o IonicModule aqui
    RouterModule.forChild([
      {
        path: '',
        component: ModificacoesPage
      }
    ])
  ],
  declarations: [ModificacoesPage]
})
export class ModificacoesPageModule {}
