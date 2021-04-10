import { Injectable, Output, EventEmitter } from '@angular/core';
import { IBuildOrder, BuildOrderStep, ICiv } from '../model';
import { Britons, Aztecs } from '../civs';

@Injectable({
  providedIn: 'root'
})
export class BuildOrderService {

  @Output() onBuildOrderSelected = new EventEmitter<IBuildOrder>();
  @Output() onStepSetAsDone = new EventEmitter<number>();

  selectedBuildOrder: IBuildOrder;
  lastTimeSetAsDone: number;

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

  setLastTimeSetAsDone(value: number){
    this.lastTimeSetAsDone = value;
    this.onStepSetAsDone.emit(this.lastTimeSetAsDone);
  }
}

export class DrushFastCastleBuildOrder implements IBuildOrder {
  name: string = "Drush Fast Castle";
  steps: BuildOrderStep[] = [
    { villagerCount: "3", details: "Queue villagers", idealTimeInSeconds: 2 },
    { villagerCount: "3", details: "Build 2 houses", footnotes: ["Then send to sheep"], idealTimeInSeconds: 4 },
    { villagerCount: "4", details: "Sheep", idealTimeInSeconds: 25 },
    { villagerCount: "5", details: "Sheep", idealTimeInSeconds: 50 },
    { villagerCount: "6", details: "Sheep", idealTimeInSeconds: 75 },
    { villagerCount: "7", details: "Build lumber camp", footnotes: ["Then send to wood"], idealTimeInSeconds: 100 },
    { villagerCount: "8-10", details: "Wood", idealTimeInSeconds: 175 },
    { villagerCount: "11", details: "Lure boar", idealTimeInSeconds: 200 },
    { villagerCount: "12", details: "Build 2 houses", footnotes: ["Then send to berries"], idealTimeInSeconds: 225 },
    { villagerCount: "13", details: "Build mill", footnotes: ["Then send to berries"], idealTimeInSeconds: 250 },
    { villagerCount: "14", details: "Berries", idealTimeInSeconds: 275 },
    { villagerCount: "15", details: "Berries", footnotes: ["Then lure boar"], idealTimeInSeconds: 300 },
  ];

  recommendedCivs = [
    new Aztecs()
  ];
}

export class ArcherRushBuildOrder implements IBuildOrder {
  name: string = "Archer Rush";
  steps: BuildOrderStep[] = [
    { villagerCount: "3", details: "Queue villagers", idealTimeInSeconds: 2 },
    { villagerCount: "3", details: "Build 2 houses", footnotes: ["Then send to sheep"], idealTimeInSeconds: 4 },
    { villagerCount: "4", details: "Sheep", idealTimeInSeconds: 25 },
    { villagerCount: "5", details: "Sheep", idealTimeInSeconds: 50 },
    { villagerCount: "6", details: "Sheep", idealTimeInSeconds: 75 },
    { villagerCount: "7", details: "Build lumber camp", footnotes: ["Then send to wood"], idealTimeInSeconds: 100 },
    { villagerCount: "8", details: "Wood", idealTimeInSeconds: 125 },
    { villagerCount: "9", details: "Wood", idealTimeInSeconds: 150 },
    { villagerCount: "10", details: "Wood", idealTimeInSeconds: 175 },
    { villagerCount: "11", details: "Lure boar", idealTimeInSeconds: 200 },
    { villagerCount: "12", details: "Build 2 houses", footnotes: ["Then send to berries"], idealTimeInSeconds: 225 },
    { villagerCount: "13", details: "Build mill", footnotes: ["Then send to berries"], idealTimeInSeconds: 250 },
    { villagerCount: "14", details: "Berries", idealTimeInSeconds: 275 },
    { villagerCount: "15", details: "Berries", footnotes: ["Then lure boar"], idealTimeInSeconds: 300 },
    { villagerCount: "16", details: "Sheep/boar", idealTimeInSeconds: 325 },
    { villagerCount: "17", details: "Sheep/boar", idealTimeInSeconds: 350 },
    { villagerCount: "18", details: "Build lumber camp", footnotes: ["Then send to wood"], idealTimeInSeconds: 375 },
    { villagerCount: "19", details: "Wood", idealTimeInSeconds: 400 },
    { villagerCount: "20", details: "Wood", idealTimeInSeconds: 425 },
    { villagerCount: "21", details: "Wood", idealTimeInSeconds: 450 },
    { villagerCount: "21", details: "Loom", idealTimeInSeconds: 475 },
    { villagerCount: "21", details: "Feudal Age", footnotes: ["Send 2 from sheep to wood.", "Send 3 from sheep to build mining camp and mine gold.", "Send 1 from food to build baracks."], idealTimeInSeconds: 580 },
  ];

  recommendedCivs = [
    new Britons()
  ];
}