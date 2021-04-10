import { Component, OnInit } from '@angular/core';
import { ICiv, PlayerColour } from '../model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.scss']
})
export class OpponentComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  changeColour(colour: PlayerColour){
    this.gameService.opponent.playerColour = colour;
  }
}
