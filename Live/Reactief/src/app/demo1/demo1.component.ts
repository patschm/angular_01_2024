import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, from, interval, of } from 'rxjs';
import { EMPTY_SUBSCRIPTION } from 'rxjs/internal/Subscription';
import { concatMap, delay, exhaustMap, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styles: [
  ]
})
export class Demo1Component implements OnInit, OnDestroy {
  
 // public i: number = 0;
  private zender:Observable<number> = interval(1000).pipe(map(nr=>nr*10));

  clickMe() {
    //this.zender.next(++this.i)
  }
  public data: string = "";
  private sub1 : Subscription = EMPTY_SUBSCRIPTION;

  ngOnInit(): void {
    this.sub1 = this.zender.pipe(switchMap(nra=>this.doRest(nra))).subscribe(txt=>{
      this.data = txt;
    });
    // this.zender.subscribe({
    //   next:nr=>this.data = nr, 
    //   error:err=>console.log(err), 
    //   complete:()=>console.log("Klaar")})
  }

  ngOnDestroy(): void {
    //this.zender.complete();
    this.sub1.unsubscribe();
  }

  private doRest(nr:number): Observable<string>
   {
    
      return of(nr).pipe(delay(Math.random()*5000), map(nr=>"Service returns " + nr));
   }
  



}
