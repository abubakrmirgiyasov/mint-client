import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '@components/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./pages/pages.module')
      .then((i) => i.PagesModule),
  },

  // redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule { }
