import {BehaviorSubject, Observable} from "rxjs";
import {clearTranslations, loadTranslations} from "@angular/localize";
import {Router} from "@angular/router";
import {Inject, Injectable, Optional} from "@angular/core";
import {TRANSLATION_OPTIONS} from "./translation-options-injection-token";
import {TranslationOptions} from "./translationOptions";


// this is a service to manage anything related to translations
@Injectable()
export class TranslationService {

  private readonly currentLocaleBS: BehaviorSubject<string>;
  private readonly availableLocales: string[];
  private readonly defaultLocale: string;

  readonly currentLocale$: Observable<string>;

  // loading state, when loading a new locale, used in the custom RouteReuseStrategy to detect if components should be reloaded
  state: 'translated' | 'loading' = 'translated';

  constructor(@Optional() @Inject(TRANSLATION_OPTIONS) options?: TranslationOptions) {
    if (options === undefined) {
      throw new Error('TranslationModule must be imported with .forRoot');
    }
    this.availableLocales = options.availableLocales;
    this.defaultLocale = options.defaultLocale;
    this.currentLocaleBS = new BehaviorSubject(this.defaultLocale);
    this.currentLocale$ = this.currentLocaleBS;
  }

  // this methode should only be called once, when the application start, for example in an initialization functions using the injection token APP_INITIALIZER
  async init(locale: string) {
    const availableLocale = this.getAvailableLocale(locale);
    await this.setLocaleData(availableLocale);
    this.currentLocaleBS.next(availableLocale);
  }

  // update the locale being displayed
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

  // get the currently displayed locale
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
