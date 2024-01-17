import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IStore, actions } from '../app.module';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.css']
})
export class ItemsDetailComponent {
  public item:FormControl<string> = new FormControl('', {nonNullable:true});

  public onAdd()
  {
    let msg = actions.add({payload:this.item.value});
    // { type:"[Items List] Add", payload:this.item.value };
   this.data.dispatch(msg);
  }

  constructor(private data:Store<IStore>)
  {   
  
  }
  
}

