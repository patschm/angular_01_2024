import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as ReduxModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IMainState } from './state/IMainState';
import { productgroupReducer } from './reducers/productgroup.reducer';
import { productReducer } from './reducers/product.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReduxModule.forRoot<IMainState>({ 
      activeProductgroup:productgroupReducer,
      activeProduct:productReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ]
})
export class StoreModule { }
