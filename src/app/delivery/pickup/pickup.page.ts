import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.page.html',
  styleUrls: ['./pickup.page.scss'],
})
export class PickupPage implements OnInit {
  

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
            this.navCtrl.navigateRoot('/delivery/pickup'); 
          },
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Submit the form");
            this.navCtrl.navigateRoot('/payment'); //ubah kepayment
          },
        },
      ],
    });
  
    await alert.present();
  }

  

}
