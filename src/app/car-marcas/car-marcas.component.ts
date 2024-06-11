import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-marcas',
  templateUrl: './car-marcas.component.html',
  styleUrls: ['./car-marcas.component.scss'],
})
export class CarMarcasComponent {
  marcas = [
    { nome: 'Volkswagen', logo: 'https://logosdownload.com/logo/volkswagen-logo-1024.png' },
    { nome: 'Marca B', logo: 'url_da_imagem_marca_b' },
    { nome: 'Marca C', logo: 'url_da_imagem_marca_c' },

  ];

  constructor(private router: Router) {}

  verModelos(marca: any) {

    this.router.navigate(['/car-models']);
  }
}
