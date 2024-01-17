import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-pipes></app-pipes>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy
{
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'Pipes';
}
