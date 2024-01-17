import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, createActionGroup, createReducer, on, props } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


export const actions = createActionGroup({
  source:"Items List",
  events: {
    "Add":props<{payload:string}>(),
    "Delete":props<{payload:string}>()
  }
});
export const itemsSelect = (st:IStore)=>st.items;

export interface IStore {
  items:string[]
}

// export function itemsReducer(oldstate:string[] = [], action:any) : string[]
// {
//   if (action.type == "[Items List] Add")
//   {
//     return [...oldstate, action.payload]
//   }
//   if (action.type == "[Items List] Delete")
//   {
//     return [...oldstate.filter((it:string)=>it != action.payload)];
//   }
//   return oldstate;
// }

const itemsReducer = createReducer<string[]>([],
  on(actions.add, (state, {payload})=> [...state, payload]),
  on(actions.delete, (state, {payload})=> [...state.filter((it:string)=>it != payload)])
  );

@NgModule({
  declarations: [
    AppComponent,
    ItemsDetailComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot<IStore>({ items:itemsReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
