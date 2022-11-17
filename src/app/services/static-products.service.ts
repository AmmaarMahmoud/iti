import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  prdlist:Iproduct[];
  prdIds : any = [];
  constructor(){
    this.prdlist=[
      {id:1 , name:"dell" , imgURL: "https://fakeimg.pl/250x100" , price:100 , quantity:10 , categoryID:1},
      {id:2 , name:"lenovo" , imgURL: "https://fakeimg.pl/250x100" , price:150 , quantity:7 , categoryID:1},
      {id:3 , name:"sumsung" , imgURL: "https://fakeimg.pl/250x100" , price:500 , quantity:5 , categoryID:2},
      {id:4 , name:"oppo" , imgURL: "https://fakeimg.pl/250x100" , price:400 , quantity:2 , categoryID:2},
      {id:5 , name:"Bmw" , imgURL: "https://fakeimg.pl/250x100" , price:200 , quantity:1 , categoryID:3},
      {id:6 , name:"lanser" , imgURL: "https://fakeimg.pl/250x100" , price:100 , quantity:0 , categoryID:3},
    ]
  }

  getAllProduct():Iproduct[]
  {
    return this.prdlist;
  }
  getProductsByCatId(cID:number):Iproduct[]
  {
    if(cID==0){
      return this.prdlist;
    }
    else{
      return this.prdlist.filter(flt=> flt.categoryID==cID)
    }
  }
  getProductById(pID:number):Iproduct | null
  {
    let prod=this.prdlist.find(prd => prd.id==pID);
    return prod? prod : null
  }
  getbrdIDs():number[]{
    // this.prdlist.map((prd:any) => 
    //   {
    //     this.prdIds.push(prd.id)
    //   });
    //   return this.prdIds;
    
    let arr:number[]=[];
    this.prdlist.map(prd => {
      arr.push(prd.id);
    })
    return arr;
  }
}
