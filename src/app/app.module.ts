import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {SiteFrameworkModule} from './site-framework/site-framework.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    SiteFrameworkModule,
    HttpClientModule,
    FormsModule],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
