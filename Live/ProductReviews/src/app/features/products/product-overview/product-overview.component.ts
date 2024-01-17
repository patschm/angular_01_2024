import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Product, ProductGroup } from 'src/app/shared/entities';
import { Store } from '@ngrx/store';
import { activeProductgroup } from 'src/app/shared/store/selectors/productgroup.selectors';
import { IMainState } from 'src/app/shared/store/state/IMainState';
import { productActions } from 'src/app/shared/store/actions/product.actions';


@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  public products$ : Observable<Product[]> = EMPTY;
  public productgroup : ProductGroup =new ProductGroup();

  public select(p:Product)
  {
    this.store.dispatch(productActions.set(p));
    this.router.navigate(['/product', p.id, 'specs']);
  }
  ngOnInit(): void {    
    this.store.select(activeProductgroup).subscribe(st=>this.productgroup = st);
    // this.rpm.params.subscribe(par=>{
    //   let pgid = +par['pgid'];
    //   this.products$ = this.http.get<Product[]>("https://localhost:5001/products/all/" + pgid);
    // });
    //this.productgroup.name = 'Testgroup';
    //this.products$ = this.http.get<Product[]>("https://localhost:5001/products/all/1");
  }
  constructor(private http: HttpClient, 
    private rpm: ActivatedRoute, 
    private router: Router,
    private store:Store<IMainState>)
  {
    this.rpm.params.pipe(
      takeUntilDestroyed(),
      map(ps=>+ps["pgid"])
    ).subscribe(pgid=>this.products$ = this.http.get<Product[]>("https://localhost:5001/products/all/" + pgid));
  }
}
