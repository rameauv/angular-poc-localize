import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './page-2.page.html',
  styleUrls: ['./page-2.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class Page2Page {

  readonly textToBeTranslated = $localize`:meaning|description@@textTranslatedWith$Localize:this text is translated using the $localize`;

  readonly today = new Date();

  readonly translations = {
    builtInPipesTitle: $localize`:@@builtInPipesTitle:Built-in pipes`,
    dateLabel: $localize`:@@dateLabel:Date:`,
    timeLabel: $localize`:@@timeLabel:Time:`,
    currencyLabel: $localize`:@@currencyLabel:Currency:`,
    customPipesTitle: $localize`:@@customPipesTitle:Custom pipes`,
  };

}
