import {TranslationOptions} from "../app/translation";

export function translationOptionsProvider() {
  const translationOptions: TranslationOptions = {
    availableLocales: process.env.NG_APP_AVAILABLE_LANGS.replace(/\s/g, '').split(','),
    defaultLocale: process.env.NG_APP_DEFAULT_LANG
  }
  return translationOptions;
}
