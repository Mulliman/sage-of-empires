import { Pipe, PipeTransform } from '@angular/core';
import { GameService } from '../services/game.service';
import { IBuildOrder } from '../model';

@Pipe({
  name: 'isRecommended'
})
export class IsRecommendedPipe implements PipeTransform {

  constructor(private gameService:GameService){}

  transform(items: IBuildOrder[]): IBuildOrder[] {
    if(!this.gameService.player){
      return null;
    }

    var civ = this.gameService.player.civ;

    return items.filter(bo => bo.recommendedCivs.some(c => c.name == civ.name));
  }

}
