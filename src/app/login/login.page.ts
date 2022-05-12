import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { loadingController } from '@ionic/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(
    public router: Router,
    public modalCtrl: ModalController,
    public loadCtrl : LoadingController,
  ) { }

  ngOnInit() {
  }
  async login(){
    this.router.navigateByUrl('home');
  }
  async dismiss(){
  
      this.router.navigateByUrl('welcome');
    
  }
 

}
