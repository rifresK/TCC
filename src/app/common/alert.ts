import { Injectable } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class Alert {

  constructor(private alertController: AlertController){}

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: subHeader,
      message: message,
      cssClass: 'custom-alert',
      buttons: ['OK'],
      backdropDismiss: false // Impede que o alerta seja fechado clicando fora dele
    });
    await alert.present();
  }
  
}
