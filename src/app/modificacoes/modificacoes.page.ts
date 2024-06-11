import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificacoes',
  templateUrl: './modificacoes.page.html',
  styleUrls: ['./modificacoes.page.scss'],
})
export class ModificacoesPage implements OnInit {

  modelo: any;

  modelos = [
    { 
      id: 1,
      marca: 'Volkswagen',
      modelo: 'Golf Gti',
      imagem: 'assets/imagens/golf.jpg',  
      detalhes: 'Motor 4 cilindros, 2.0, 16v Turbo',
      modificacoes: ['Stage 1: Potência 320cvs e 46kgfm de Torque  Modificação necessária: - Filtro Inbox', 'Stage 2: Potência 340cvs e 48 kgfm de Torque  Modificações necessárias: Intake - Downpipe - Catback', 'Stage 3: Potência +400cvs e +55kgfm de torque Modificações necessárias: Intake - Downpipe - Catback  Intercooler - Turbina IS38']
    },
    { 
      id: 2,
      marca: 'Volkswagen',
      modelo: 'Tiguan',
      imagem: 'assets/imagens/mustang.jpg',
      detalhes: 'Motor 4 cilindros, 2.0, 16v Turbo',
      modificacoes: ['Stage 1: Potência 320cvs e 46kgfm de Torque  Modificação necessária: - Filtro Inbox', 'Stage 2: Potência 340cvs e 48 kgfm de Torque  Modificações necessárias: Intake - Downpipe - Catback', 'Stage 3: Potência +400cvs e +55kgfm de torque Modificações necessárias: Intake - Downpipe - Catback  Intercooler - Turbina IS38']
    },
    { 
      id: 3,
      marca: 'Audi',
      modelo: 'RS3',
      imagem: 'assets/imagens/audi1.jpg',  
      detalhes: 'Motor 5 cilindros, 2.5 Litros, 20 válvulas Turbo 400cvs',
      modificacoes: ['Stage 1: Potência 500cvs e 60kgfm de Torque  Modificação necessária: - Filtro Inbox', 'Stage 2: Potência 530cvs e 64 kgfm de Torque  Modificações necessárias: Intake - Downpipe - Catback - Inlet e Intercooler', 'Stage 3: Não especificado.']
    },
    { 
      id: 4,
      marca: 'Audi',
      modelo: 'A1',
      imagem: 'assets/imagens/a1.jpg',  
      detalhes: 'Motor 4 cilindros, 1.4 Litros, 16v Turbo 122 cvs',
      modificacoes: ['Stage 1: Potência 175cvs e 27kgfm de Torque  Modificação necessária: - Filtro Inbox', 'Stage 2: Potência 185cvs e 28kgfm de Torque  Modificações necessárias: Intake - Downpipe - Catback', 'Stage 3: Não espepcificado.']
    }
    ,
    { 
      id: 5,
      marca: 'Fiat',
      modelo: 'Toro',
      imagem: 'assets/imagens/toro.jpg',  
      detalhes: 'Motor 4 cilindros, 2.0 Litros, 16v Turbo Diesel 170cvs',
      modificacoes: ['Stage 1: Potência 210cvs e 43 kgfm de Torque  Modificação necessária: - Filtro Inbox', 'Stage 2: Potência 220cvs e 44kgfm de Torque  Modificações necessárias: Intake - Downpipe - Catback', 'Stage 3: Não especificado.']
    }
    ,
    { 
      id: 6,
      marca: 'Fiat',
      modelo: 'Toro',
      imagem: 'assets/imagens/renegade.jpg',  
      detalhes: 'Motor 4 cilindros, 2.0 Litros, 16v Turbo Diesel 170cvs',
      modificacoes: ['Stage 1: Potência 210cvs e 43 kgfm de Torque  Modificação necessária: - Filtro Inbox', 'Stage 2: Potência 220cvs e 44kgfm de Torque  Modificações necessárias: Intake - Downpipe - Catback', 'Stage 3: Não especificado.']
    }
    ,
    { 
      id: 7,
      marca: 'BMW',
      modelo: '125i (F20 B48)',
      imagem: 'assets/imagens/125i.png',  
      detalhes: 'Motor 4 cilindros, 2.0 Litros, 16v Turbo 224cvs',
      modificacoes: ['Stage 1: Potência 320cvs e 46 kgfm de Torque  Modificação necessária: - Filtro Inbox', 'Stage 2: Potência 340cvs e 48kgfm de Torque  Modificações necessárias: Intake - Downpipe ', 'Stage 3: Não especificado.']
    }
    ,
    { 
      id: 8,
      marca: 'Porsche',
      modelo: '911 Carrera GTS 3.0 (992)',
      imagem: 'assets/imagens/992.png',  
      detalhes: 'Motor 6 cilindros Boxer, 3.0 Litros, 24v Turbo 480cvs',
      modificacoes: ['Stage 1: Potência 600cvs e 66 kgfm de Torque  Modificação necessária: - Filtro Inbox', 'Stage 2: Potência 620cvs e 68kgfm de Torque  Modificações necessárias: Coletor de Escape - Filtro Inbox - Catback ', 'Stage 3: Não especificado.']
    }
  
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const modeloId = +params['id'];
      this.modelo = this.modelos.find(m => m.id === modeloId);
    });
  }
}
