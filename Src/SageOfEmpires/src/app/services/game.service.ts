import { Injectable } from '@angular/core';
import { Player, Opponent, GameSpeeds, GameSpeed } from '../model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  player: Player;
  opponent: Opponent;

  isPlaying: boolean;
  gameSpeed: number = GameSpeeds.Normal;
  elapsedSeconds: number = 0;
  interval;

  constructor() { }

  setPlayer(player: Player){
    this.player = player;
  }

  setOpponent(opponent: Opponent){
    this.opponent = opponent;
  }

  setGameSpeed(speed: GameSpeed){
    this.gameSpeed = speed.speed;

    // Force the timer to update
    this.elapsedSeconds += 0.01;
    this.elapsedSeconds -= 0.01;
  }

  start(){
    this.isPlaying = true;
    this.interval = setInterval(() => {
      this.elapsedSeconds += 0.5;
    },500)
  }

  pause(){
    this.isPlaying = false;
    clearInterval(this.interval);
  }
}
