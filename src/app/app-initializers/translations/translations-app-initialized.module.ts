import {APP_INITIALIZER, NgModule} from "@angular/core";
import {factory} from "./factory";
import {LocaleService} from "../../services/locale.service";

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: factory,
      deps: [LocaleService]
    }
  ]
})
export class TranslationsAppInitializedModule {}
