import {LocaleService} from "../../services/locale.service";

export function factory(localeService: LocaleService) {
  return async () => {
    const browserLang = navigator.language;
    await localeService.init(browserLang);
  };
}
