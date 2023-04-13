import {APP_INITIALIZER, NgModule} from "@angular/core";
import {factory} from "./factory";
import {TranslationService} from "../translation/translation.service";

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: factory,
      deps: [TranslationService]
    }
  ]
})
export class TranslationsAppInitializedModule {}
