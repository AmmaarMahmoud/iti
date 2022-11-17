import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { AsaidComponent } from './Component/asaid/asaid.component';
import { MainComponent } from './Component/main/main.component';
import { FooterComponent } from './Component/footer/footer.component';
import { OrderComponent } from './Component/order/order.component';
import { ProductListComponent } from './Component/order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Component/Directive/light-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './Component/order/OrderMaster/order-master/order-master.component';
import { USDEURPipe } from './pipes-2/usdeur.pipe';
import { MainLayOutComponent } from './Component/main-lay-out/main-lay-out.component';
import { NotFoundComponent } from './Component/order/not-found/not-found.component';
import { ProductDetailsComponent } from './Component/order/product-details/product-details.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsaidComponent,
    MainComponent,
    FooterComponent,
    OrderComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    UserLoginComponent,
    USDEURPipe,
    MainLayOutComponent,
    NotFoundComponent,
    ProductDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
