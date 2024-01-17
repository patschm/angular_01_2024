import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { IStore, actions, itemsSelect } from '../app.module';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit
{
  public items$:Observable<string[]> = EMPTY;

  public select(item:string){
    let act = actions.delete({payload:item});
    this.store.dispatch(act);
    
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  constructor(private store:Store<IStore>){
    this.items$ = this.store.select(itemsSelect);
  }
  
}
