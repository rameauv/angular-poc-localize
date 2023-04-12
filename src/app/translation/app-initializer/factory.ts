import {TranslationService} from "../translation/translation.service";

export function factory(localeService: TranslationService) {
  return async () => {
    const browserLang = navigator.language;
    await localeService.init(browserLang);
  };
}
