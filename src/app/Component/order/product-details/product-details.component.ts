import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currprdID:number=0;
  prd:Iproduct | null=null;
  PrdIDsArr:number[]=[];
  constructor(private activatedroute:ActivatedRoute,
              private prdService:StaticProductsService,
              private location:Location,
              private router: Router
             ) { }

  ngOnInit(): void {
    // this.currprdID=Number(this.activatedroute.snapshot.paramMap.get('p'));
    // this.prd=this.prdService?.getProductById(this.currprdID);
    this.PrdIDsArr=this.prdService.getbrdIDs();
    this.activatedroute.paramMap.subscribe(ParamMap=> {
      this.currprdID=Number(ParamMap.get('p'));
      this.prd=this.prdService.getProductById(this.currprdID);
    });
    
  }
  backto(){
    this.location.back();  
  }
  Prdpriv(){
    let currintIndex=this.PrdIDsArr.findIndex(elem=>elem==this.currprdID);
    let prdID;
    if(this.currprdID > 0){
      prdID=this.PrdIDsArr[currintIndex-1];
      this.router.navigate(['/profile',prdID]);
      this.currprdID=prdID
    }
  }
  Prdnext(){
    let currintIndex=this.PrdIDsArr.findIndex(elem=>elem==this.currprdID);
    let prdID;
    if(this.currprdID < this.PrdIDsArr.length){
      prdID=this.PrdIDsArr[currintIndex+1];
      this.router.navigate(['/profile',prdID]);
      this.currprdID=prdID
    }
  }
}
