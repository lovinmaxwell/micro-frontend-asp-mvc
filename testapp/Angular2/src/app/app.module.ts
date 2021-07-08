import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { App2Component } from './app2/app2.component';
import {AppContextService} from './app-context.service';

@NgModule({
  declarations: [
    AppComponent,
    App2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppContextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
