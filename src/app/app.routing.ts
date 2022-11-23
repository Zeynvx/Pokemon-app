import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PkmnComponent } from './views/pkmn/pkmn.component';
import { PkmnListComponent } from './views/pkmn-list/pkmn-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pkmn-list', component: PkmnListComponent },
  { path: 'pokemon/:id', component: PkmnComponent },
  { path: '**', redirectTo: '' },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);