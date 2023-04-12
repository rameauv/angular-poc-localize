import {NgModule} from "@angular/core";
import {Page1Page} from "./page-1.page";
import {RouterModule, Routes} from "@angular/router";
import {ComponentShowingText} from "../../components/component-showing-text";
import {CurrencyPipe, DatePipe} from "@angular/common";

const routes: Routes = [{
  path: '',
  component: Page1Page
}]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ComponentShowingText,
        CurrencyPipe,
        DatePipe
    ],
  declarations: [
    Page1Page
  ]
})
export class Page1Module {
}
