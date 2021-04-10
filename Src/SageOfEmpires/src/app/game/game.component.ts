import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Player, Opponent } from '../model';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { GameService } from '../services/game.service';
import { BuildOrderService } from '../services/build-order.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('divToScroll') divToScroll: ElementRef;

  // player: Player;
  // opponent: Opponent;

  constructor(public gameService: GameService, private buildOrderService: BuildOrderService) { }

  ngOnInit(): void {

    this.buildOrderService.onStepSetAsDone.subscribe((value) => {
      console.log("onStepSetAsDone", value);
      

      var el = this.divToScroll.nativeElement.querySelector('[data-scroll-to-seconds="' + value + '"]'); 

      console.log("onStepSetAsDone - el", el);

      if(el){
        var top = el.offsetTop;
        console.log("onStepSetAsDone - el.offsetTop", top);
        this.divToScroll.nativeElement.scrollTop = top;
      }
    });

    // setInterval(() => {
    //   console.log(this.divToScroll.nativeElement.scrollTop);
      
      
    //         this.divToScroll.nativeElement.scrollTop += 5;
    //       }, 2500);
  }
}
