import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StaticProductsService } from 'src/app/services/static-products.service';
import { ProductListComponent } from '../../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit,AfterViewInit {

  // catlist:Icategory[];
  SelectedcatID:number=0;
  reverseoutput:number=0;
  @ViewChild('ClientNameInp') ClientNameInpElem!:ElementRef;
  @ViewChild(ProductListComponent) PrdlistCompObj!:ProductListComponent;
  // recivedOrdertotleprice:number=0;
  constructor(private StaticPrdService:StaticProductsService) {
    // this.catlist=[
    //   {id:1 , name:"laptob"},
    //   {id:2 , name:"taplet"},
    //   {id:3 , name:"mobile"}
    // ]
 
  }
  ngOnInit(): void {
    console.log(this.StaticPrdService.getAllProduct());
  }
  // onTotlePriceChange(TotelPrice:number){
  //   this.recivedOrdertotleprice=TotelPrice;
  // }
  ChangeCatId(value:number){
    this.reverseoutput=value*15;
  }

  ngAfterViewInit(): void {
    this.ClientNameInpElem.nativeElement.value='Ammar Mahmoud Atitoo';
    this.ClientNameInpElem.nativeElement.style.border="2px solid red";
    this.ClientNameInpElem.nativeElement.style.backgroundColor="#ddd";
  }

  // ChangeQuantity(){
  //   this.PrdlistCompObj.prdlist.quantity-=1;
  // }

}
