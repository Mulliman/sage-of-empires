import { Injectable } from '@angular/core';
import { Player, Opponent } from '../model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  player: Player;
  opponent: Opponent;

  constructor() { }

  setPlayer(player: Player){
    this.player = player;
  }
}
