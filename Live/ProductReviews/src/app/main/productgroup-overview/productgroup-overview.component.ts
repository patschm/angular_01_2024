import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, filter } from 'rxjs';
import { ProductGroup } from '../../shared/entities'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { productgroupActions } from 'src/app/shared/store/actions/productgroup.action';
import { IMainState } from 'src/app/shared/store/state/IMainState';


@Component({
  selector: 'app-productgroup-overview',
  templateUrl: './productgroup-overview.component.html',
  styleUrls: ['./productgroup-overview.component.css']
})
export class ProductgroupOverviewComponent implements OnInit
{
  public productGroups$ : Observable<ProductGroup[]> = EMPTY;

  public select(pg:ProductGroup)
  {
    this.store.dispatch(productgroupActions.set(pg));
    this.router.navigate(['/products', pg.id]);
  }

  ngOnInit(): void {
    
    this.productGroups$ = this.http.get<ProductGroup[]>("https://localhost:5001/productgroups")
  }

  constructor(private http: HttpClient, private router:Router, private store:Store<IMainState>){}
}
