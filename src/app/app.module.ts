import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {RouteReuseStrategy, RouterModule} from "@angular/router";
import {I18nRouteReuseStrategyService} from "./services/i18n-route-reuse-strategy.service";

import '@angular/common/locales/global/uk';
import '@angular/common/locales/global/ko';
import '@angular/common/locales/global/fr';
import {LocaleIdService} from "./services/locale-id.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: I18nRouteReuseStrategyService
    },
    {
      provide: LOCALE_ID,
      useClass: LocaleIdService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
