import {LOCALE_ID, NgModule} from "@angular/core";
import {LocaleIdService} from "./locale-id.service";

@NgModule({
  providers: [
    {
      provide: LOCALE_ID,
      useClass: LocaleIdService
    }
  ],
})
export class LocaleIdModule {
}
