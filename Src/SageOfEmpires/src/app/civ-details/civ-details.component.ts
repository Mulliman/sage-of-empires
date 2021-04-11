import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { GameService } from '../services/game.service';
import { ICiv, PlayerColour } from '../model';

@Component({
  selector: 'app-civ-details',
  templateUrl: './civ-details.component.html',
  styleUrls: ['./civ-details.component.scss']
})
export class CivDetailsComponent implements OnInit {

  @Input() civ: ICiv;
  @Input() isPlayer: boolean;

  hasCompletedSettingsOnce: boolean = false;

  constructor(public gameService: GameService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.civ.civBonuses);

    if(this.isPlayer){
      this.hasCompletedSettingsOnce = !!this.gameService.player.playerColour;

      this.gameService.onPlayerColourChanged.subscribe((c: PlayerColour) => { this.changeColour(c); this.ref.detectChanges() });

    } else{
      this.hasCompletedSettingsOnce = !!this.gameService.opponent.playerColour;

      this.gameService.onOpponentColourChanged.subscribe((c: PlayerColour) => { this.changeColour(c); this.ref.detectChanges() });
    }
  }

  changeColour(colour: PlayerColour){

    console.log("changeColour", colour);
    
    if(this.isPlayer){
      this.gameService.player.playerColour = colour;
    } else{
      this.gameService.opponent.playerColour = colour;
    }

    this.hasCompletedSettingsOnce = true;
  }

  unpickCiv(){
    if(this.isPlayer){
      this.gameService.player = null;
    } else{
      this.gameService.opponent = null;
    }
    
  }

}
