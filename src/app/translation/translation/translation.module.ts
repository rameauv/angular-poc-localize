import {ModuleWithProviders, NgModule} from "@angular/core";
import {TranslationService} from "./translation.service";
import {TranslationOptions} from "./translationOptions";
import {TRANSLATION_OPTIONS} from "./translation-options-injection-token";

@NgModule({
  providers: [
    TranslationService,
  ],
})
export class TranslationModule {
  static forRoot(options: TranslationOptions): ModuleWithProviders<TranslationModule> {
    return {
      ngModule: TranslationModule,
      providers: [
        {
          provide: TRANSLATION_OPTIONS,
          useValue: options
        }
      ]
    }
  }
}
