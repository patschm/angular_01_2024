import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-main></app-main>
  `,
  styles: []
})
export class AppComponent {
  title = 'Roeter';
  // constructor(private rt:Router){
  //   console.log(this.rt.config);
  // }
}
