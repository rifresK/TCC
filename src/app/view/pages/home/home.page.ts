import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/model/services/firebase-service.service.spec';
import { Itens } from 'src/app/model/entities/itens/Itens';
import { AlertController, MenuController } from '@ionic/angular';
import { CarMarcasComponent } from 'src/app/car-marcas/car-marcas.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private alertController: AlertController,
    private firebase: FirebaseService,
    private menuController: MenuController
  ) {

  }

  async abrirPagina(pagina: string) {

    switch (pagina) {
      case 'Home':
        this.router.navigate(['/home']);
        break;
      case 'logar':
        this.router.navigate(['/logar']);
        break;
      case 'sobre':
        this.router.navigate(['/sobre']);
        break;
      case 'preparadora':
        this.router.navigate(['/preparadora']);
        break;
      case 'info-modificacoes': 
        this.router.navigate(['/info-modificacoes']); 
        break;
      case 'carmodels':
        this.router.navigate(['/car-models']);
        break;
      default:
        console.log('Página não reconhecida:', pagina);
    }
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
  verModelos(marca: any) {

    this.router.navigate(['/car-models']);}

  editar(arma: Itens) {
    this.router.navigateByUrl('/editar', { state: { arma: arma } });
  }
  abrirInfoModificacoes() {
    this.router.navigate(['/info-modificacoes']);
  }
}
