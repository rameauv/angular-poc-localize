import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {
  TranslationModule,
  TranslationOptions,
  TranslationRouteReuseStrategyModule,
  TranslationsAppInitializedModule
} from "./translation";

// localization for Date and currency pipes
import '@angular/common/locales/global/uk';
import '@angular/common/locales/global/ko';
import '@angular/common/locales/global/fr';

import {translationOptionsProvider} from "../helpers/translation-options-provider";

const translationOptions = translationOptionsProvider()

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    // module for the translating
    TranslationModule.forRoot(translationOptions),
    TranslationsAppInitializedModule,
    TranslationRouteReuseStrategyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
