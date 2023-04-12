import {NgModule} from "@angular/core";
import {TranslationService} from "./translation.service";
import {LocaleIdService} from "../locale-id/locale-id.service";

@NgModule({
  providers: [
    TranslationService,
  ],
})
export class TranslationModule {}
