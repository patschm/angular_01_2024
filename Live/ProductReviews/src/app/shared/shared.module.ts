import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [NotFoundComponent, ContactComponent],
  exports:[NotFoundComponent, ContactComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
