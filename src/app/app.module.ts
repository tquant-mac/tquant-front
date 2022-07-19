import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgxsModule } from '@ngxs/store';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { TrendComponent } from './view/trend/trend.component';
import { FollowComponent } from './view/follow/follow.component';
import { FactoresComponent } from './view/factores/factores.component';
import { BacktradeComponent } from './view/backtrade/backtrade.component';
import { StrategiesComponent } from './view/strategies/strategies.component';
import { TrendState } from './state/trend/trend.state';
import { FollowState } from './state/follow/follow.state';
import { StrategiesState } from './state/strategies/strategies.state';
import { FactoresState } from './state/factores/factores.state';
import { BacktradeState } from './state/backtrade/backtrade.state';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TrendComponent,
    FollowComponent,
    FactoresComponent,
    BacktradeComponent,
    StrategiesComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxsModule.forRoot(
      [
        TrendState,
        FollowState,
        StrategiesState,
        FactoresState,
        BacktradeState
      ],
      {
        developmentMode: !environment.production
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
