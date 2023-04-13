import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './page-1.page.html',
  styleUrls: ['./page-1.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Page {
  readonly today = new Date();
  readonly name = 'Jean-marc';
  readonly itemCount = 4;

  readonly textToBeTranslated = $localize`:@@textTranslatedWith$Localize:en this text is translated using the $localize`;
  readonly translationWithInterpolation = $localize`:@@translationWithInterpolation:Hi ${this.name}! There are ${this.itemCount} items.`;
  readonly pluralTranslation = {
    '=0': $localize`:@@plural_0:en No messages.`,
    '=1': $localize`:@@plural_1:en One message.`,
    'other': $localize`:@@plural_other:en # messages.`
  };
  readonly selectTranslationMap = {
    'male': $localize`:@@selectTranslation_male:en Invite him.`,
    'female': $localize`:@@selectTranslation_female:en Invite her.`,
    'other': $localize`:@@selectTranslation_other:en Invite them.`
  };


  readonly pipeTranslations = {
    builtInPipesTitle: $localize`:@@builtInPipesTitle:en Built-in pipes`,
    dateLabel: $localize`:@@dateLabel:en Date:`,
    timeLabel: $localize`:@@timeLabel:en Time:`,
    currencyLabel: $localize`:@@currencyLabel:en Currency:`,
    customPipesTitle: $localize`:@@customPipesTitle:en Custom pipes`,
  };
}
