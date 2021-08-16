import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppContextService } from './app-context.service';
import { App1Component } from './app1/app1.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [AppContextService, Window ],
  bootstrap: [AppComponent]
})
export class AppModule { }
