import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CarMarcasComponent } from 'src/app/car-marcas/car-marcas.component';
import { CarDetailsPageModule } from './car-details/car-details.module'; // Importe o módulo do CarDetailsPage
import { ModificacoesPageModule } from 'src/app/modificacoes/modificacoes.module'; // Importe o módulo da página de modificações

@NgModule({
  declarations: [AppComponent, CarMarcasComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CarDetailsPageModule, // Adicione o módulo do CarDetailsPage aqui
    ModificacoesPageModule, // Adicione o módulo da página de modificações aqui
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
