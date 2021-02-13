import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path: 'app',
    component: MainComponent,
    loadChildren: '@buypart/buypart-pages#BuypartPagesModule',
  },
  {
    path: '',
    redirectTo: `app/home`,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'app/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  // declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
