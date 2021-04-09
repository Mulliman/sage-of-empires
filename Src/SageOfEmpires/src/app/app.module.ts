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

import { CommonModule } from '@angular/common';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ColourChooserComponent } from './colour-chooser/colour-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    OpponentComponent,
    PlayerComponent,
    GameComponent,
    AddPlayerComponent,
    ColourChooserComponent
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
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
