import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    public modalCtrl : ModalController, 
    private router : Router,
  ) { } 

  ngOnInit() {
  }

  async login(){
    this.router.navigateByUrl('login');
  }
  async register(){
    this.router.navigateByUrl('register');
  }
}

