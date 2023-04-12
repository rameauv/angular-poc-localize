import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from "@angular/router";
import {TranslationService} from "../translation/translation.service";

@Injectable({
  providedIn: 'root'
})
export class I18nRouteReuseStrategy extends BaseRouteReuseStrategy {

  constructor(private localeService: TranslationService) {
    super();
  }

  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return this.localeService.state === 'loading'
      ? false
      : super.shouldReuseRoute(future, curr);
  }
}
