import { NovaTransferenciaComponent } from './../nova-transferencia/nova-transferencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';

import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core'
import {registerLocaleData} from '@angular/common'
import localePt from '@angular/common/locales/pt'
import { AppRoutingModule } from './app.routing.module';


registerLocaleData(localePt, 'pt')



@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-br' },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
