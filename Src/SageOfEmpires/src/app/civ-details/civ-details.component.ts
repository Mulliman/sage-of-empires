import { Component, OnInit, Input } from '@angular/core';
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

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    console.log(this.civ.civBonuses);
  }

  changeColour(colour: PlayerColour){
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
