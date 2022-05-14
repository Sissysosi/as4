import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})

export class PaymentPage implements OnInit {

  constructor(private alertCtrl: AlertController,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  async showPrompt() {
    const alert = await this.alertCtrl.create({
      header: "Confirm",
      message: "Are You Confirm?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel the form");
            this.navCtrl.navigateRoot('/payment'); 
          },
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Submit the form");
            this.navCtrl.navigateRoot('/home'); 
          },
        },
      ],
    });
  
    await alert.present();
  }



}
