import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isuserlogged:boolean=false;
  constructor(private userAuth:UserAuthService){ }

  ngOnInit(): void {
    this.isuserlogged=this.userAuth.isUserLogged;
    this.userAuth.getloggedStatus().subscribe(state=>{
      this.isuserlogged=state;
    })
  }

}
