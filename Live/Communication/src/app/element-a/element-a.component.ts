import { Component } from '@angular/core';

@Component({
  selector: 'app-element-a',
  template: `
    <h1>Element A</h1>
    <h2>{{someData}}</h2>
    <hr/>
    <input type="text" [(ngModel)]="someData" (input)="doeIets()"/>
    <hr/>
    <app-element-b [data]="someData" (change)="onChange($event)"></app-element-b>

  `,
  styles: [
  ]
})
export class ElementAComponent {
  public someData : string = '';

  public doeIets(){
    console.log(this.someData);
  }
  public onChange(txt:string) 
  {
    this.someData = txt;
  }
}
