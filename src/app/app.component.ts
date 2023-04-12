import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {LocaleService} from "./services/locale.service";

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
      id: 'uk',
      label: 'ukrainian'
    },
    {
      id: 'fr',
      label: 'french'
    }
  ];
  currentLocale: string;
  private currentLocaleSubscription?: Subscription;

  constructor(private localeService: LocaleService, private cdr: ChangeDetectorRef, private router: Router) {
    this.currentLocale = this.localeService.getCurrentLocale();
  }

  ngOnInit() {
    console.log(this.localeService);
    this.currentLocaleSubscription = this.localeService.currentLocale$.subscribe(this.currentLocalStreamHandler);
  }

  ngOnDestroy(): void {
    this.currentLocaleSubscription?.unsubscribe();
  }

  handleLocaleChange(locale: string) {
    console.log(this.localeService);
    this.localeService.updateCurrentLocale(locale, this.router);
  }

  currentLocalStreamHandler = (locale: string) => {
    console.log(locale);
    this.currentLocale = locale;
    this.cdr.detectChanges();
  };
}
