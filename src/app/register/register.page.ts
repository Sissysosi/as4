import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private router : Router,
  ) { }

  ngOnInit() {
  }
  async register(){
    this.router.navigateByUrl('home');
  }
   async dismiss(){
   
      this.router.navigateByUrl('welcome');
    
   }
}
