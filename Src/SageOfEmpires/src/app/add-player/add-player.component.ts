import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CivService } from '../services/civ.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ICiv, Player, Opponent } from '../model';
import { GameService } from '../services/game.service';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  @Input() isOpponent: boolean;
  @ViewChild('addPlayerInput') addPlayerInput: ElementRef;
  //@ViewChild('auto') auto;
  @ViewChild(MatAutocompleteTrigger, { static: true }) trigger: MatAutocompleteTrigger;

  civControl = new FormControl();
  filteredOptions: Observable<ICiv[]>;

  constructor(public civService: CivService, public gameService: GameService) { }

  ngOnInit(): void {
    this.filteredOptions = this.civControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.civService.filterCivsByName(value))
      );
  }

  getCivPlaceholder() {
    return !this.isOpponent
      ? "Your civ..."
      : "Opponent civ..."
  }

  selectCiv(civName) {
    if (!this.isOpponent) {
      var civ = this.civService.getCiv(civName);
      var player = new Player(civ);

      this.gameService.setPlayer(player);
    } else {
      var civ = this.civService.getCiv(civName);
      var player = new Opponent(civ);

      this.gameService.setOpponent(player);
    }
  }

  focus() {
    this.addPlayerInput.nativeElement.focus();
    this.trigger._onChange(""); 
    this.trigger.openPanel();
  }
}