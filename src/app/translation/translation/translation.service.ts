import {BehaviorSubject, Observable} from "rxjs";
import {clearTranslations, loadTranslations} from "@angular/localize";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class TranslationService {
  private readonly currentLocaleBS = new BehaviorSubject('en');
  private readonly availableLocales = ['ko', 'fr', 'fr-CA', 'en'];
  private readonly defaultLocale = 'ko';

  readonly currentLocale$: Observable<string> = this.currentLocaleBS

  state: 'translated' | 'loading' = 'translated';

  constructor() {
  }

  async init(locale: string) {
    const availableLocale = this.getAvailableLocale(locale);
    await this.setLocaleData(availableLocale);
    this.currentLocaleBS.next(availableLocale);
  }

  async updateCurrentLocale(locale: string, router: Router) {
    const availableLocale = this.getAvailableLocale(locale);

    this.state = 'loading';

    await this.setLocaleData(availableLocale)

    await router.navigateByUrl(router.url, {
      onSameUrlNavigation: 'reload'
    });

    this.state = 'translated';
    this.currentLocaleBS.next(availableLocale);
  }

  getCurrentLocale() {
    return this.currentLocaleBS.getValue();
  }

  private setDocumentI18nAttributes(locale: string) {
    globalThis.document.documentElement.lang = locale;
  }

  private async setLocaleData(locale: string) {
    $localize.locale = locale;

    clearTranslations();

    try {
      const response = await fetch(`/assets/i18n/${locale}.json`);

      const parsedResponse = await response.json();
      const translations = parsedResponse.translations;

      loadTranslations(translations);
      this.setDocumentI18nAttributes(locale);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  private getAvailableLocale(locale: string) {
    const perfectMatch = this.availableLocales.find(localeIt => localeIt === locale);
    if (perfectMatch !== undefined) {
      return perfectMatch;
    }
    const lang = locale.substring(0, 2);
    const langMatch = this.availableLocales.find(localeIt =>
      localeIt === lang
    );
    if (langMatch !== undefined) {
      return langMatch;
    }
    return this.defaultLocale;
  }
}
