import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-modificacoes',
  templateUrl: './info-modificacoes.page.html',
  styleUrls: ['./info-modificacoes.page.scss'],
})
export class InfoModificacoesPage {

  constructor(private router: Router) {}

  abrirDetalhes(modificacao: string) {

  }

}
