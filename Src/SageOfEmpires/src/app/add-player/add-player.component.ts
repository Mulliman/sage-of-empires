import { Component, OnInit, Input } from '@angular/core';
import { CivService } from '../services/civ.service';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Civ, Player } from '../model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  @Input() isOpponent: boolean;

  civControl = new FormControl();
  filteredOptions: Observable<Civ[]>;

  constructor(public civService: CivService, public gameService: GameService) { }

  ngOnInit(): void {
    this.filteredOptions = this.civControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.civService.filterCivsByName(value))
      );
  }

  selectCiv(civName){
    if(!this.isOpponent)
    {
      var civ = this.civService.getCiv(civName);
      var player = new Player(civ);

      this.gameService.setPlayer(player);
    }
  }
}