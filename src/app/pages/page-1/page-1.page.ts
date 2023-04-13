import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './page-1.page.html',
  styleUrls: ['./page-1.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Page {
}
