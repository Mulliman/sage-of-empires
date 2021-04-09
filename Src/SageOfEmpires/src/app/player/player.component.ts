import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { PlayerColour } from '../model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  changeColour(colour: PlayerColour){
    this.gameService.player.playerColour = colour;
  }
}
