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
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { CommonModule } from '@angular/common';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ColourChooserComponent } from './colour-chooser/colour-chooser.component';
import { ChooseBuildOrderComponent } from './choose-build-order/choose-build-order.component';
import { IsRecommendedPipe } from './pipes/is-recommended.pipe';
import { BuildOrderPanelComponent } from './build-order-panel/build-order-panel.component';
import { CivDetailsComponent } from './civ-details/civ-details.component';
import { GameTimePipe } from './pipes/game-time.pipe';
import { TimerComponent } from './timer/timer.component';
import { BuildOrderTargetDirective } from './directives/build-order-target.directive';
import { HomeComponent } from './home/home.component';

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
    TimerComponent,
    BuildOrderTargetDirective,
    HomeComponent
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
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
