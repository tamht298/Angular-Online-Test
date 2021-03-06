import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AdminLayoutModule} from './admin-layout/admin-layout.module';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToastrModule} from 'ngx-toastr';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    DataTablesModule,
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    ToastrModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
