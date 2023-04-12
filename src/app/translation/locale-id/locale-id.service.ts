import {TranslationService} from "../translation/translation.service";
import {Injectable} from "@angular/core";

@Injectable()
export class LocaleIdService extends String {
  constructor(private localeService: TranslationService) {
    super();
  }

  override toString(): string {
    return this.localeService.getCurrentLocale();
  }

  override valueOf(): string {
    return this.toString();
  }
}
