import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
    import('./home/home.module').then(
      (mod) => mod.HomeModule
    ),
    // resolve: {
    //   homeProducts: HomeResolver
    //   },
    //   runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BypartPagesRoutingModule {}
