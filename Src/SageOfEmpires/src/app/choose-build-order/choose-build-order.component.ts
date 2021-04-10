import { Component, OnInit } from '@angular/core';
import { BuildOrderService } from '../services/build-order.service';
import { IBuildOrder } from '../model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-choose-build-order',
  templateUrl: './choose-build-order.component.html',
  styleUrls: ['./choose-build-order.component.scss']
})
export class ChooseBuildOrderComponent implements OnInit {

  constructor(public buildOrderService: BuildOrderService, public gameService: GameService) { }

  ngOnInit(): void {
  }

  selectBuildOrder(buildOrder: IBuildOrder){
    
  }
}
