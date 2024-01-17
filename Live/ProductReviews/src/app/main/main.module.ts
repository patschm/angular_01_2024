import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../shared/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { ProductgroupOverviewComponent } from './productgroup-overview/productgroup-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '../shared/store/store.module';


const routes:Routes = [
  {
    path:"home",
    component: ProductgroupOverviewComponent
  }, 
  {
    path:'product',
    loadChildren:()=>import('../features/products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:'products',
    loadChildren:()=>import('../features/products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:"contact", 
    component:ContactComponent
  },
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  declarations: [
    MainComponent,
    ProductgroupOverviewComponent
  ],
  exports:[MainComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing:true}),
    SharedModule,
    HttpClientModule,
    StoreModule
  ]
})
export class MainModule { }
