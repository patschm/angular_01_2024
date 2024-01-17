import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductSpecsComponent } from './product-specs/product-specs.component';
import { ProductPricesComponent } from './product-prices/product-prices.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { StoreModule } from '@ngrx/store';

const routes:Routes = [
  {
    path:":pgid",
    component: ProductOverviewComponent
  },
  {
    path:':pid',
    component:ProductDetailComponent,
    children:[
      { path:'specs', component:ProductSpecsComponent},
      { path:'prices', component:ProductPricesComponent},
      { path:'reviews', component:ProductReviewsComponent},
      { path:'', redirectTo:'specs', pathMatch:'full'}
    ]
  }
];

@NgModule({
  declarations: [
    ProductOverviewComponent,
    ProductDetailComponent,
    ProductSpecsComponent,
    ProductPricesComponent,
    ProductReviewsComponent
  ],
  exports: [
    ProductOverviewComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    StoreModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
