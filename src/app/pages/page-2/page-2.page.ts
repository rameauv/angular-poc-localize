import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './page-2.page.html',
  styleUrls: ['./page-2.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page2Page {

  textToBeTranslated = $localize`:meaning|description@@textTranslatedWith$Localize:this text is translated using the $localize`;

}
