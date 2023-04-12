import {LocaleService} from "./locale.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class LocaleIdService extends String {
  constructor(private localeService: LocaleService) {
    super();
  }

  override toString(): string {
    return this.localeService.getCurrentLocale();
  }

  override valueOf(): string {
    return this.toString();
  }
}
