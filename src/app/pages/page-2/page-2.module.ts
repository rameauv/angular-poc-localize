import {NgModule} from "@angular/core";
import {Page2Page} from "./page-2.page";
import {RouterModule, Routes} from "@angular/router";
import {ComponentShowingText} from "../../components/component-showing-text";
import {CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe} from "@angular/common";

const routes: Routes = [{
  path: '',
  component: Page2Page
}]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ComponentShowingText,
        DatePipe,
        CurrencyPipe,
        I18nPluralPipe,
        I18nSelectPipe
    ],
  declarations: [
    Page2Page
  ],
})
export class Page2Module {
}
