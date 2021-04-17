import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { GameSpeed } from '../model';
import { GameService } from '../services/game.service';
import { BuildOrderService } from '../services/build-order.service';

@Directive({
  selector: '[appBuildOrderTarget]'
})
export class BuildOrderTargetDirective {

  @Input('appBuildOrderTarget') target: string;
  @Input('idealTime') idealTime: number;

  constructor(private renderer: Renderer2,
    private elementRef: ElementRef,
    private gameService: GameService,
    private buildOrderService: BuildOrderService) { }

  ngOnInit() {
    if(this.idealTime <= 0){
      return;
    }

    this.setAndRemoveClass(this.idealTime)
  }

  setAndRemoveClass(idealTime: number) {
    var interval = setInterval(() => {
      var awardClass = "";

      var silver = idealTime * 1.05;
      var bronze = idealTime * 1.15;
      var bad = idealTime * 1.3;

      var elapsedSeconds = this.gameService.elapsedSeconds * this.gameService.gameSpeed;

      if(elapsedSeconds > idealTime && elapsedSeconds < silver)
      {
        awardClass = "gold";
      }else if(elapsedSeconds >= silver && elapsedSeconds < bronze){
        awardClass = "silver";
      } else if(elapsedSeconds >= bronze && elapsedSeconds < bad){
        awardClass = "bronze";
      } else if(elapsedSeconds >= bad){
        awardClass = "done";
        clearInterval(interval);
        this.buildOrderService.setLastTimeSetAsDone(idealTime);
      }

      if(awardClass){
        this.renderer.removeClass(this.elementRef.nativeElement,"gold");
        this.renderer.removeClass(this.elementRef.nativeElement,"silver");
        this.renderer.removeClass(this.elementRef.nativeElement,"bronze");
        this.renderer.addClass(this.elementRef.nativeElement, awardClass);
      }
    }, 2000);
  }
}