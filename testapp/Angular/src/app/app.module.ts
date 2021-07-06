import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppContextService } from './app-context.service';
import { App1Component } from './app1/app1.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    App1Component
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [AppContextService],
  bootstrap: [AppComponent,App1Component]
})
export class AppModule { }
