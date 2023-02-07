import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {
  RouterModule,
  Routes,
  PreloadingStrategy,
  PreloadAllModules,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/').then(m => m.HomeModule)
  },
  {
    path: 'digital-artwork',
    loadChildren: () => import('./art/').then(m => m.ArtModule)
  },
  {
    path: 'digital-design',
    loadChildren: () => import('./design/').then(m => m.DesignModule)
  },
  {
    path: 'film',
    loadChildren: () => import('./film/').then(m => m.FilmModule)
  },
  {
    path: 'web',
    loadChildren: () => import('./web/').then(m => m.WebModule)
  },
  { path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
