import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestModule } from './rest/rest.module';
import { ServiceModule } from './service/service.module';
import { EmptyModule } from './service/empty/empty.module';
import { StateService } from './service/state.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    RestModule,
    RestModule
  ],
 //providers:[{provide:StateService, useClass:StateService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
