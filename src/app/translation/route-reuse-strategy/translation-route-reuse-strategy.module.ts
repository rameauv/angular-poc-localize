import {NgModule} from "@angular/core";
import {RouteReuseStrategy} from "@angular/router";
import {I18nRouteReuseStrategy} from "./i18n-route-reuse-strategy";

@NgModule({
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: I18nRouteReuseStrategy
    }
  ]
})
export class TranslationRouteReuseStrategyModule {}
