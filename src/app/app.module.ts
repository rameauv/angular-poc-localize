import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import '@angular/common/locales/global/uk';
import '@angular/common/locales/global/ko';
import '@angular/common/locales/global/fr';
import {TranslationModule, TranslationRouteReuseStrategyModule, TranslationsAppInitializedModule} from "./translation";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    TranslationModule,
    TranslationsAppInitializedModule,
    TranslationRouteReuseStrategyModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
