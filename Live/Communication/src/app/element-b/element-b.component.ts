import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-element-b',
  template: `
     <h1>Element B</h1>
    <h2>{{data}}</h2>
    <hr/>
    <input type="text" [(ngModel)]="data" (input)="doeIets()"/>
  `,
  styles: [
  ]
})
export class ElementBComponent {
  @Input()
  public data : string = '';
  @Output()
  public change: EventEmitter<string> = new EventEmitter();

  public doeIets(){
    this.change.emit(this.data);
    console.log(this.data);
  }
}
