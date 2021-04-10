import { Pipe, PipeTransform } from '@angular/core';
import { GameService } from '../services/game.service';

@Pipe({
  name: 'gameTime'
})
export class GameTimePipe implements PipeTransform {

  constructor(private gameService: GameService){}

  transform(value: number, gameSpeed: number): string {
    var gameSeconds = value * gameSpeed; //this.gameService.gameSpeed;

    return this.getDisplayTime(gameSeconds);
  }

  getDisplayTime(gameSeconds: number) {
    var intSeconds = Math.round(gameSeconds);

    var minutes = Math.floor(intSeconds / 60);
    var seconds = intSeconds - minutes * 60; 

    return this.padStringLeft(minutes, "0", 2) + ":" + this.padStringLeft(seconds, "0", 2);
  }

  private padStringLeft(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
  }

}