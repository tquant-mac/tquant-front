import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrendComponent } from './view/trend/trend.component';
import { FollowComponent } from './view/follow/follow.component';
import { StrategiesComponent } from './view/strategies/strategies.component';
import { FactoresComponent } from './view/factores/factores.component';
import { BacktradeComponent } from './view/backtrade/backtrade.component'; 

const routes: Routes = [
  { path: 'trend', component: TrendComponent },
  { path: 'follow', component: FollowComponent },
  { path: 'strategies', component: StrategiesComponent },
  { path: 'factores', component: FactoresComponent },
  { path: 'backtrade', component: BacktradeComponent },
  { path: '', redirectTo: '/trend', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
