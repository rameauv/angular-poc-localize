import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from "@angular/router";
import {LocaleService} from "./locale.service";

@Injectable({
  providedIn: 'root'
})
export class I18nRouteReuseStrategyService extends BaseRouteReuseStrategy {

  constructor(private localeService: LocaleService) {
    super();
  }

  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return this.localeService.state === 'loading'
      ? false
      : super.shouldReuseRoute(future, curr);
  }
}
