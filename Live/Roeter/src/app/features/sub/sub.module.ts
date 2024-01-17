import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';


@NgModule({
  declarations: [SubComponent, Sub1Component, Sub2Component],
  exports:[SubComponent, Sub1Component, Sub2Component],
  imports: [
    CommonModule
  ]
})
export class SubModule { }
