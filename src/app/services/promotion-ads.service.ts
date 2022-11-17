import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adslist:string[]
  constructor() {
    this.adslist=['Big descounts',
              'Sale up to 50%',
              'Check Our wait friday offers',
              '',
              'Sputial wait friday offers up to 70%'
            ]
  }
  getScheduledAds(intervalInsucond:number):Observable<string>
{
  return new Observable <string> ((observer)=>{
    // observer.next();
    // observer.error();
    // observer.complete();
    let counter=0
    let adsTimer = setInterval(()=>{
      if(counter==this.adslist.length){
        observer.complete();
      }
      if(this.adslist[counter]==""){
        observer.error("Error : Empty Ads");
      }
      observer.next(this.adslist[counter]);
      counter++;
    },intervalInsucond*1000)
    return {
      unsubscribe() {
        clearInterval(adsTimer);
          console.log('In Obs Unsubscribe')
        
      },
    }
  });
}
getSerialAds():Observable<string>
{
  return from(this.adslist);
}
}
