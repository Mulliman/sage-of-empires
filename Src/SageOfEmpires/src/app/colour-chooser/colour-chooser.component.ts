import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PlayerColours, TeamColourOptions, PlayerColour } from '../model';

@Component({
  selector: 'app-colour-chooser',
  templateUrl: './colour-chooser.component.html',
  styleUrls: ['./colour-chooser.component.scss']
})
export class ColourChooserComponent implements OnInit {

  @Output() onColourSelected = new EventEmitter<PlayerColour>();

  colours: PlayerColour[];

  constructor() { }

  ngOnInit(): void {
    this.colours = TeamColourOptions.array;
  }

  onClick(selectedColour: PlayerColour){
    console.log(selectedColour);

    this.onColourSelected.emit(selectedColour);
  }
}
