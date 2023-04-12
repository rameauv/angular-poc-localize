import {BehaviorSubject, Observable} from "rxjs";
import {clearTranslations, loadTranslations} from "@angular/localize";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class LocaleService {
  private readonly currentLocaleBS = new BehaviorSubject('en');
  readonly currentLocale$: Observable<string> = this.currentLocaleBS
  state: 'translated' | 'loading' = 'translated';

  constructor() {
  }

  async updateCurrentLocale(locale: string, router: Router) {
    this.state = 'loading';

    await this.setLocaleData(locale)

    await router.navigateByUrl(router.url, {
      onSameUrlNavigation: 'reload'
    });

    this.state = 'translated';
    this.currentLocaleBS.next(locale);
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
}
