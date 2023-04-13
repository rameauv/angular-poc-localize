import {TranslationService} from "../translation/translation.service";

// wait for the locale to be fully loaded to display the app so that application doesn't switch rapidly from korean to english if the browser language is set to english
export function factory(localeService: TranslationService) {
  return async () => {
    const browserLang = navigator.language;
    await localeService.init(browserLang);
  };
}
