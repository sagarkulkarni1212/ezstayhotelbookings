import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EzstayheaderComponent } from './ezstayheader/ezstayheader.component';
import { EzstayfooterComponent } from './ezstayfooter/ezstayfooter.component';
import { EzstayhomeComponent } from './ezstayhome/ezstayhome.component';

@NgModule({
  declarations: [
    AppComponent,
    EzstayheaderComponent,
    EzstayfooterComponent,
    EzstayhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
