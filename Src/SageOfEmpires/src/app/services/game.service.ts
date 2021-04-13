import { Injectable, Output, EventEmitter } from '@angular/core';
import { Player, Opponent, GameSpeeds, GameSpeed, PlayerColour } from '../model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  @Output() onPlayerColourChanged = new EventEmitter<PlayerColour>();
  @Output() onOpponentColourChanged = new EventEmitter<PlayerColour>();

  player: Player;
  opponent: Opponent;

  isPlaying: boolean;
  gameSpeed: number = GameSpeeds.Normal;
  elapsedSeconds: number = 0;
  interval;

  constructor() { }

  setPlayer(player: Player){
    var existingColour = this.player ? this.player.playerColour : null;

    this.player = player;

    if(existingColour) this.setPlayerColour(existingColour);
  }

  setPlayerColour(colour: PlayerColour){
    if(!this.player){
      return;
    }

    console.log("setPlayerColour", colour);

    this.player.playerColour = colour;
    this.onPlayerColourChanged.emit(this.player.playerColour);
  }

  setOpponent(opponent: Opponent){
    var existingColour = this.opponent ? this.opponent.playerColour : null;

    this.opponent = opponent;

    if(existingColour) this.setOpponentColour(existingColour);
  }

  setOpponentColour(colour: PlayerColour){

    console.log("setOpponentColour", colour);
    
    if(!this.opponent){
      return;
    }

    this.opponent.playerColour = colour;
    this.onOpponentColourChanged.emit(this.opponent.playerColour);
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

  toggleStartPause(){
    if(this.isPlaying){
      this.pause();
    }else{
      this.start();
    }
  }

  gg(){
    this.isPlaying = false;
    clearInterval(this.interval);

    location.replace("/");
  }
}
