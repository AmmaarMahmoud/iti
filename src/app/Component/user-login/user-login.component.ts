import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  isUsertoggle:boolean=false;
  constructor(private authServic:UserAuthService) { }

  ngOnInit(): void {
    // this.isUsertoggle=this.authServic.isUserLogged;
  }
  Login(){
    this.authServic.Login("UserName","password");
    this.isUsertoggle=this.authServic.isUserLogged;
  }
  Logout(){
    this.authServic.LogOut();
    this.isUsertoggle=this.authServic.isUserLogged;
  }
}
