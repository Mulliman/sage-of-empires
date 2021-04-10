import { Component, OnInit } from '@angular/core';
import { BuildOrderService } from '../services/build-order.service';
import { GameService } from '../services/game.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-build-order-panel',
  templateUrl: './build-order-panel.component.html',
  styleUrls: ['./build-order-panel.component.scss']
})
export class BuildOrderPanelComponent implements OnInit {

  selected = new FormControl(0);

  constructor(public buildOrderService: BuildOrderService, public gameService: GameService) { }

  ngOnInit(): void {
    this.buildOrderService.onBuildOrderSelected.subscribe(() => { console.log("Build order chosen"); this.selected.setValue(1); });
  }

}
