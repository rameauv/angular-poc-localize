import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page1Module} from "./pages/page-1/page-1.module";
import {Page2Module} from "./pages/page-2/page-2.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => Page1Module
  },
  {
    path: 'page-2',
    loadChildren: () => Page2Module
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
