import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CarModelsPage } from './car-models/car-models.page';
import { CarDetailsPage } from './car-details/car-details.page';
import { ModificacoesPage } from './modificacoes/modificacoes.page'; // Importe a página ModificacoesPage
import { InfoModificacoesPage } from './info-modificacoes/info-modificacoes.page';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'logar',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./view/pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./view/pages/editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./view/pages/usuarios/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'logar',
    loadChildren: () => import('./view/pages/usuarios/logar/logar.module').then( m => m.LogarPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./view/pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'car-models',
    loadChildren: () => import('src/app/car-models/car-models.module').then( m => m.CarModelsPageModule)
  },
  { path: '', redirectTo: 'car-models', pathMatch: 'full' },
  { path: 'car-models', component: CarModelsPage },
  { path: 'car-details/:id', component: CarDetailsPage },
  { path: 'modificacoes/:id', component: ModificacoesPage },   {
    path: 'preparadora',
    loadChildren: () => import('./preparadora/preparadora.module').then( m => m.PreparadoraPageModule)
  },
  {
    path: 'info-modificacoes',
    loadChildren: () => import('./info-modificacoes/info-modificacoes.module').then( m => m.InfoModificacoesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
