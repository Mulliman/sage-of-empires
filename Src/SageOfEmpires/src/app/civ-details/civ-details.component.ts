import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../services/game.service';
import { ICiv } from '../model';

@Component({
  selector: 'app-civ-details',
  templateUrl: './civ-details.component.html',
  styleUrls: ['./civ-details.component.scss']
})
export class CivDetailsComponent implements OnInit {

  @Input() civ: ICiv;

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    console.log(this.civ.civBonuses);
    
  }

}
