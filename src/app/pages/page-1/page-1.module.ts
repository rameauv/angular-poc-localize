import {NgModule} from "@angular/core";
import {Page1Page} from "./page-1.page";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: Page1Page
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    Page1Page
  ]
})
export class Page1Module {
}
