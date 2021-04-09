import { Component, OnInit } from '@angular/core';
import { Player, Opponent } from '../model';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  // player: Player;
  // opponent: Opponent;

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }
}
