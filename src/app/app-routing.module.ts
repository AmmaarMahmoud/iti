import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayOutComponent } from './Component/main-lay-out/main-lay-out.component';
import { MainComponent } from './Component/main/main.component';
import { NotFoundComponent } from './Component/order/not-found/not-found.component';
import { ProductDetailsComponent } from './Component/order/product-details/product-details.component';
import { ProductListComponent } from './Component/order/product-list/product-list.component';
import { UserLoginComponent } from './Component/user-login/user-login.component';

const routes: Routes = [
{path:'',component:MainLayOutComponent,children:
[
   {path:'' , redirectTo:'/home', pathMatch:'full'},
   {path:'home' , component:MainComponent},
   {path:'profile' , component:ProductListComponent},
   {path:'profile/:p' , component:ProductDetailsComponent}
]
},
{path:'Login' , component:UserLoginComponent},
{path:'Logout' , component:UserLoginComponent},
{path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
