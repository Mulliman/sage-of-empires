import { Injectable, Output, EventEmitter } from '@angular/core';
import { IBuildOrder, BuildOrderStep, ICiv } from '../model';
import { Britons, Aztecs } from '../civs';

@Injectable({
  providedIn: 'root'
})
export class BuildOrderService {

  @Output() onBuildOrderSelected = new EventEmitter<IBuildOrder>();

  selectedBuildOrder: IBuildOrder;

  public buildOrders: IBuildOrder[] = [
    new DrushFastCastleBuildOrder(),
    new ArcherRushBuildOrder()
  ];

  constructor() { }

  getRecommendedBuildOrders(civ: ICiv) : IBuildOrder[]{
    return this.buildOrders.filter(bo => bo.name == civ.name);
  }

  setSelectedBuildOrder(buildOrder: IBuildOrder){
    this.selectedBuildOrder = buildOrder;

    this.onBuildOrderSelected.emit(this.selectedBuildOrder);
  }
}

export class DrushFastCastleBuildOrder implements IBuildOrder {
  name: string = "Drush Fast Castle";
  steps: BuildOrderStep[] = [
    { villagerCount: "3", details: "Queue villagers", idealTimeInSeconds: 2 },
    { villagerCount: "3", details: "Build 2 houses", footnote: "Then send to sheep", idealTimeInSeconds: 4 },
    { villagerCount: "4", details: "Sheep", idealTimeInSeconds: 25 },
    { villagerCount: "5", details: "Sheep", idealTimeInSeconds: 50 },
    { villagerCount: "6", details: "Sheep", idealTimeInSeconds: 75 },
    { villagerCount: "7", details: "Build lumber camp", footnote: "Then send to wood", idealTimeInSeconds: 100 },
    { villagerCount: "8-10", details: "Wood", idealTimeInSeconds: 175 },
    { villagerCount: "11", details: "Lure boar", idealTimeInSeconds: 200 },
    { villagerCount: "12", details: "Build 2 houses", footnote: "Then send to berries", idealTimeInSeconds: 225 },
    { villagerCount: "13", details: "Build mill", footnote: "Then send to berries", idealTimeInSeconds: 250 },
    { villagerCount: "14", details: "Berries", idealTimeInSeconds: 275 },
    { villagerCount: "15", details: "Berries", footnote: "Then lure boar", idealTimeInSeconds: 300 },
  ];

  recommendedCivs = [
    new Aztecs()
  ];
}

export class ArcherRushBuildOrder implements IBuildOrder {
  name: string = "Archer Rush";
  steps: BuildOrderStep[] = [
    { villagerCount: "3", details: "Queue villagers", idealTimeInSeconds: 0 },
    { villagerCount: "3", details: "Build 2 houses", footnote: "Then send to sheep", idealTimeInSeconds: 2 },
    { villagerCount: "4-6", details: "Sheep", idealTimeInSeconds: 75 },
    { villagerCount: "7", details: "Build lumber camp", footnote: "Then send to wood", idealTimeInSeconds: 100 },
    { villagerCount: "8-10", details: "Wood", idealTimeInSeconds: 175 },
    { villagerCount: "11", details: "Lure boar", idealTimeInSeconds: 200 },
    { villagerCount: "12", details: "Build 2 houses", footnote: "Then send to berries", idealTimeInSeconds: 225 },
    { villagerCount: "13", details: "Build mill", footnote: "Then send to berries", idealTimeInSeconds: 250 },
    { villagerCount: "14", details: "Berries", idealTimeInSeconds: 275 },
    { villagerCount: "15", details: "Berries", footnote: "Then lure boar", idealTimeInSeconds: 300 },
  ];

  recommendedCivs = [
    new Britons()
  ];
}