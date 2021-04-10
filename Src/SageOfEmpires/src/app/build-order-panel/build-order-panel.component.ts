import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BuildOrderService } from '../services/build-order.service';
import { GameService } from '../services/game.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-build-order-panel',
  templateUrl: './build-order-panel.component.html',
  styleUrls: ['./build-order-panel.component.scss']
})
export class BuildOrderPanelComponent implements OnInit {

  @ViewChild('divToScroll') divToScroll: ElementRef;

  selected = new FormControl(0);

  constructor(public buildOrderService: BuildOrderService, public gameService: GameService) { }

  ngOnInit(): void {
    this.buildOrderService.onBuildOrderSelected.subscribe(() => { this.selected.setValue(1); });

//     setInterval(() => {
// console.log(this.divToScroll.nativeElement.scrollTop);


//       this.divToScroll.nativeElement.scrollTop += 5;
//     }, 2500);
  }
}