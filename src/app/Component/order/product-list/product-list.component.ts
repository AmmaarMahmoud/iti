import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnChanges {
  filterprd:Iproduct[]=[];
  // prdlist:Iproduct[];
  SelectedCatId:number=0;
  @Input() sint:number=0;
  @Output() Tprice:EventEmitter<number>;
  TotlePrice:number=0


  constructor(private StaticPrdService:StaticProductsService,private router:Router) {
    this.Tprice = new EventEmitter<number>();
    // this.prdlist=[
    //   {id:1 , name:"dell" , imgURL: "https://fakeimg.pl/250x100" , price:100 , quantity:10 , categoryID:1},
    //   {id:2 , name:"lenovo" , imgURL: "https://fakeimg.pl/250x100" , price:150 , quantity:7 , categoryID:1},
    //   {id:3 , name:"sumsung" , imgURL: "https://fakeimg.pl/250x100" , price:500 , quantity:5 , categoryID:2},
    //   {id:4 , name:"oppo" , imgURL: "https://fakeimg.pl/250x100" , price:400 , quantity:2 , categoryID:2},
    //   {id:5 , name:"Bmw" , imgURL: "https://fakeimg.pl/250x100" , price:200 , quantity:1 , categoryID:3},
    //   {id:6 , name:"lanser" , imgURL: "https://fakeimg.pl/250x100" , price:100 , quantity:0 , categoryID:3},
    // ]
  } 


  ngOnInit(): void{
    console.log(this.StaticPrdService.getAllProduct());
  }


  ngOnChanges(): void {
    // this.filter();
   this.filterprd = this.StaticPrdService.getProductsByCatId(this.sint);
  }
  
  // filter(){
  //   if(this.sint==0)
  //     this.filterprd=this.prdlist;
  //   else
  //     this.filterprd=this.prdlist.filter(flt=> flt.categoryID==this.sint)
  // }

  ChangeTotlePrice(prd:Iproduct,count:string){
    if(prd.id && prd.quantity>= +count){
      prd.quantity=prd.quantity- +count
      this.TotlePrice = prd.price* +count;
      this.Tprice.emit(this.TotlePrice);
    }
    else{
      alert("القيمه المطلوبه غير متاحه")
    }
  }

  OpenPrdDetails(prdID:number){
    this.router.navigate(['/profile',prdID])
  }
































  // prdlist: Iproduct[];
  // prdlistOfcat: Iproduct[] = [];
  // @Input() SentcatID: number = 0;
  // @Output() TotlePriceChange:EventEmitter<number>;
  // Ordertotleprice: number = 0;
  // defDate: Date = new Date();
  // constructor() {
  //   this.TotlePriceChange =new EventEmitter<number>();
  //   this.prdlist = [
  //     { id: 100, name: "lenovo-laptop", price: 100, quantity: 1, imgURL: "https://fakeimg.pl/250x100", categoryID: 1 },
  //     { id: 200, name: "dell-laptop", price: 200, quantity: 2, imgURL: "https://fakeimg.pl/250x100", categoryID: 1 },
  //     { id: 300, name: "esar-laptop", price: 300, quantity: 3, imgURL: "https://fakeimg.pl/250x100", categoryID: 2 },
  //     { id: 400, name: "toshepa-laptop", price: 400, quantity: 4, imgURL: "https://fakeimg.pl/250x100", categoryID: 2 },
  //     { id: 500, name: "appl-laptop", price: 500, quantity: 5, imgURL: "https://fakeimg.pl/250x100", categoryID: 3 },
  //     { id: 600, name: "appl-laptop", price: 600, quantity: 6, imgURL: "https://fakeimg.pl/250x100", categoryID: 3 }
  //   ]
  // }
  // ngOnChanges(): void {
  //   this.filterproducteBycatID()
  // }
  // puy(prdprice: number, count: string) {
  //   this.Ordertotleprice += +count * prdprice;
  //   this.TotlePriceChange.emit(this.Ordertotleprice);
  // }
  // filterproducteBycatID() {
  //   if (this.SentcatID == 0)
  //     this.prdlistOfcat = this.prdlist;
  //   else
  //     this.prdlistOfcat = this.prdlist.filter(prd => prd.categoryID == this.SentcatID);

  // }
  // fun(index:number,prdlist:any):number{
  //   return prdlist.id;
  // }
}
