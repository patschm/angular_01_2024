import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/entities';
import { activeProduct } from 'src/app/shared/store/selectors/product.selectors';
import { IMainState } from 'src/app/shared/store/state/IMainState';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product:Product = new Product();

  ngOnInit(): void {  
  }

  constructor(private store:Store<IMainState>)
  {
    this.store.select(activeProduct)
      .pipe(takeUntilDestroyed())
      .subscribe(p=>this.product = p);
  }
 

}
