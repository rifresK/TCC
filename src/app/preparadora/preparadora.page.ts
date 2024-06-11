import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preparadora',
  templateUrl: './preparadora.page.html',
  styleUrls: ['./preparadora.page.scss'],
})
export class PreparadoraPage {

  constructor(private router: Router) {}

  abrirPagina(pagina: string) {
    this.router.navigate([`/${pagina}`]);
  }
}
