import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-models',
  templateUrl: './car-models.page.html',
  styleUrls: ['./car-models.page.scss'],
})
export class CarModelsPage {
  modelos = [
    { 
      id: 1,
      marca: 'Volkswagen',
      modelo: 'Golf Gti',
      imagem: 'assets/imagens/golf.png',  
      detalhes: 'Motor 4 cilindros, 2.0, 16v Turbo 220cvs',
      exibirDetalhes: false 
    },
    { 
      id: 2,
      marca: 'Volkswagen',
      modelo: 'Tiguan',
      imagem: 'assets/imagens/tiguan.png',
      detalhes: 'Motor 4 cilindros, 2.0, 16v Turbo 220cvs',
      exibirDetalhes: false 
    },
    { 
      id: 3,
      marca: 'Audi',
      modelo: 'RS3',
      imagem: 'assets/imagens/audi1.png',  
      detalhes: 'Motor 5 cilindros, 2.5 Litros, 20v Turbo 400cvs',
      exibirDetalhes: false // 
    },
    { 
      id: 4,
      marca: 'Audi',
      modelo: 'A1',
      imagem: 'assets/imagens/a1.png',  
      detalhes: 'Motor 4 cilindros, 1.4 Litros, 16v Turbo 122 cvs',
      exibirDetalhes: false // 
    }
    ,
    { 
      id: 5,
      marca: 'Fiat',
      modelo: 'Toro',
      imagem: 'assets/imagens/toro.png',  
      detalhes: 'Motor 4 cilindros, 2.0 Litros, 16v Turbo Diesel 170cvs',
      exibirDetalhes: false // 
    }
    ,
    { 
      id: 6,
      marca: 'Jeep',
      modelo: 'Renegade',
      imagem: 'assets/imagens/renegade.png',  
      detalhes: 'Motor 4 cilindros, 2.0 Litros, 16v Turbo Diesel 170cvs',
      exibirDetalhes: false // 
    }
    ,
    { 
      id: 7,
      marca: 'BMW',
      modelo: '125i (F20 B48)',
      imagem: 'assets/imagens/125i.png',  
      detalhes: 'Motor 4 cilindros, 2.0 Litros, 16v Turbo',
      exibirDetalhes: false // 
    }
    ,
    { 
      id: 8,
      marca: 'Porsche',
      modelo: '911 Carrera GTS 3.0 (992)',
      imagem: 'assets/imagens/992.png',  
      detalhes: 'Motor 6 cilindros Boxer, 3.0 Litros, 24v Turbo',
      exibirDetalhes: false // 
    }
   
  ];


  constructor(private router: Router) {}

  showDetails(modelo: any) {
    this.router.navigate(['/car-details', modelo.id], { state: { modelo: modelo } });
  }

  verModificacoes(id: number) {
    this.router.navigate(['/modificacoes', id]);
  }
  toggleDetalhes(modelo: any) {
    modelo.exibirDetalhes = !modelo.exibirDetalhes;
  }
}
