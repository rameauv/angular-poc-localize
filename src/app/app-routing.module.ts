import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/page-1/page-1.module').then(module => module.Page1Module)
  },
  {
    path: 'page-2',
    loadChildren: () => import('./pages/page-2/page-2.module').then(module => module.Page2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
