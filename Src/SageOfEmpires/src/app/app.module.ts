import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpponentComponent } from './opponent/opponent.component';
import { PlayerComponent } from './player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { CommonModule } from '@angular/common';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ColourChooserComponent } from './colour-chooser/colour-chooser.component';
import { ChooseBuildOrderComponent } from './choose-build-order/choose-build-order.component';
import { IsRecommendedPipe } from './pipes/is-recommended.pipe';
import { BuildOrderPanelComponent } from './build-order-panel/build-order-panel.component';
import { CivDetailsComponent } from './civ-details/civ-details.component';
import { GameTimePipe } from './pipes/game-time.pipe';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    OpponentComponent,
    PlayerComponent,
    GameComponent,
    AddPlayerComponent,
    ColourChooserComponent,
    ChooseBuildOrderComponent,
    IsRecommendedPipe,
    BuildOrderPanelComponent,
    CivDetailsComponent,
    GameTimePipe,
    TimerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Material
    MatGridListModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
