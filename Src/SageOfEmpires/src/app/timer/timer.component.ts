import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { GameSpeedOptions, GameSpeed, GameSpeeds } from '../model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  selectedSpeed: GameSpeed;
  speedOptions: GameSpeed[];

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this.speedOptions = GameSpeedOptions.array;
    this.selectedSpeed = this.speedOptions.find(s => s.speed == GameSpeeds.Normal) ;
    console.log(this.selectedSpeed);
    
  }

  changeSpeed(speed: GameSpeed){
    this.selectedSpeed = speed;
    this.gameService.setGameSpeed(speed);
  }
}