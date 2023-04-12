import {NgModule} from "@angular/core";
import {Page1Page} from "./page-1.page";
import {RouterModule, Routes} from "@angular/router";
import {ComponentShowingText} from "../../components/component-showing-text";

const routes: Routes = [{
  path: '',
  component: Page1Page
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ComponentShowingText
  ],
  declarations: [
    Page1Page
  ]
})
export class Page1Module {
}
