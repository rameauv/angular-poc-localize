import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './page-1.page.html',
  styleUrls: ['./page-1.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Page {
  textToBeTranslated = $localize`:meaning|description@@textTranslatedWith$Localize:this text is translated using the $localize`;
  readonly today = new Date();

  readonly translations = {
    builtInPipesTitle: $localize`:@@builtInPipesTitle:Built-in pipes`,
    dateLabel: $localize`:@@dateLabel:Date:`,
    timeLabel: $localize`:@@timeLabel:Time:`,
    currencyLabel: $localize`:@@currencyLabel:Currency:`,
    customPipesTitle: $localize`:@@customPipesTitle:Custom pipes`,
  };
}
