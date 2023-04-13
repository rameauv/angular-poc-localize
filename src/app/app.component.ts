import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {TranslationService} from "./translation/translation/translation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'angular-poc-localize';

  readonly localeOptions = [
    {
      id: 'en',
      label: 'english'
    },
    {
      id: 'ko',
      label: 'korean'
    },
    {
      id: 'fr-CA',
      label: 'canadian french'
    },
    {
      id: 'fr',
      label: 'french'
    }
  ];
  currentLocale: string;
  private currentLocaleSubscription?: Subscription;

  constructor(private localeService: TranslationService, private cdr: ChangeDetectorRef, private router: Router) {
    this.currentLocale = this.localeService.getCurrentLocale();
  }

  ngOnInit() {
    this.currentLocaleSubscription = this.localeService.currentLocale$.subscribe(this.currentLocalStreamHandler);
  }

  ngOnDestroy(): void {
    this.currentLocaleSubscription?.unsubscribe();
  }

  handleLocaleChange(locale: string) {
    this.localeService.updateCurrentLocale(locale, this.router);
  }

  currentLocalStreamHandler = (locale: string) => {
    this.currentLocale = locale;
    this.cdr.detectChanges();
  };
}
