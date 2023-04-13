import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  selector: 'app-component-showing-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './component-showing-text.html',
  standalone: true
})
export class ComponentShowingText {
  @Input() textToShow: string = '';
}
