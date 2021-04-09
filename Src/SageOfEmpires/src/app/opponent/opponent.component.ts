import { Component, OnInit } from '@angular/core';
import { Civ } from '../model';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.scss']
})
export class OpponentComponent implements OnInit {

  public civ: Civ;

  constructor() { }

  ngOnInit(): void {
  }

}
