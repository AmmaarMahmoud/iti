import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isLoggedSublect:BehaviorSubject<boolean>;
  constructor() { 
    this.isLoggedSublect=new BehaviorSubject<boolean>(false)
  }
  Login(UserName:string,Password:string){
    let UserToken='123456789';
    localStorage.setItem("token",UserToken);
    this.isLoggedSublect.next(true);
  }
  LogOut(){
    localStorage.removeItem("token");
    this.isLoggedSublect.next(false)
  }
  get isUserLogged():boolean{
    return (localStorage.getItem("token")?true:false);
  }
  getloggedStatus(){
    return this.isLoggedSublect;
  }
}
