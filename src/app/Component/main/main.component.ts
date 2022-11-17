import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { PromotionAdsService } from 'src/app/services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnDestroy {
  storeinfo:StoreData;
  istoggle:boolean = true;
  Subscrittion!:Subscription;
  constructor(private PromoAds: PromotionAdsService) {
    this.storeinfo=new StoreData("ITIStore","https://picsum.photos/200/300",['Cairo','Alex','Qena'])
  }
 
  show(){
    this.istoggle=!this.istoggle;
  }

  ngOnInit(): void {
    let ObServer={
      next:(data:string)=>{
        console.log(data)
      },
      error:(arr:string)=>{
        console.log(arr)
      },
      complete:()=>{
        console.log('Ads Finishhed')
      }
    }
    this.Subscrittion=this.PromoAds.getScheduledAds(3).subscribe(ObServer);
    let filterObservable=this.PromoAds.getSerialAds().pipe(
      filter(fl=>fl.includes('wait friday')),
      map(fl=>'Ad: '+ fl)
    )
    filterObservable.subscribe(ObServe=>{
      console.log(ObServe); 
    });
    // this.PromoAds.getSerialAds().subscribe(ba=>{
    //   console.log(ba);
    // })
  }
  ngOnDestroy(): void {
    this.Subscrittion.unsubscribe()
  }
}
