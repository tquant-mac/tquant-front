import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TrendComponent } from './view/trend/trend.component';
import { FollowComponent } from './view/follow/follow.component';
import { FactoresComponent } from './view/factores/factores.component';
import { BacktradeComponent } from './view/backtrade/backtrade.component';
import { StrategiesComponent } from './view/strategies/strategies.component';

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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
