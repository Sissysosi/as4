import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../ionic-auth.service';
// import { Storage} from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // [x: string]: any;
  user =[];
  userEmail: string;
  // username : string; 
  userPassword: string;
  constructor(
    private router : Router,
    private ionicAuthService: IonicAuthService, 
    // private firestore : Storage, 
    private AngularFireAuth : AngularFireAuth,

  ) {
    // const CurrentUser = this.AngularFireAuth.currentUser; 
    // this.ionicAuthService.getUserByid

   }

  ngOnInit() {
    
      this.ionicAuthService.userDetails().subscribe(response => {
        if (response !== null) {
          this.userEmail = response.email;
          // this.username = response.username; 
          // this.userPassword = response.password;
        } else {
          this.router.navigateByUrl('');
        }
      }, error => {
        console.log(error);
      })
    
  
  }
  async editprofile(){
    this.router.navigateByUrl('profile/edit-profile');
  }
}
