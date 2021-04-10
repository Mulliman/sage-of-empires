import { Injectable, Output, EventEmitter } from '@angular/core';
import { IBuildOrder, BuildOrderStep, ICiv } from '../model';
import { Aztecs, Berbers, Britons } from './civ.service';

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
    { villagerCount: "3", details: "Queue villagers" },
    { villagerCount: "3", details: "Build 2 houses", footnote: "Then send to sheep" },
    { villagerCount: "4-6", details: "Sheep" },
    { villagerCount: "7", details: "Build lumber camp", footnote: "Then send to wood" },
    { villagerCount: "8-10", details: "Wood" },
    { villagerCount: "11", details: "Lure boar" },
    { villagerCount: "12", details: "Build 2 houses", footnote: "Then send to berries" },
    { villagerCount: "13", details: "Build mill", footnote: "Then send to berries" },
    { villagerCount: "14", details: "Berries" },
    { villagerCount: "15", details: "Berries", footnote: "Then lure boar" },
  ];

  recommendedCivs = [
    new Aztecs()
  ];
}

export class ArcherRushBuildOrder implements IBuildOrder {
  name: string = "Archer Rush";
  steps: BuildOrderStep[] = [
    { villagerCount: "3", details: "Queue villagers" },
    { villagerCount: "3", details: "Build 2 houses", footnote: "Then send to sheep" },
    { villagerCount: "4-6", details: "Sheep" },
    { villagerCount: "7", details: "Build lumber camp", footnote: "Then send to wood" },
    { villagerCount: "8-10", details: "Wood" },
    { villagerCount: "11", details: "Lure boar" },
    { villagerCount: "12", details: "Build 2 houses", footnote: "Then send to berries" },
    { villagerCount: "13", details: "Build mill", footnote: "Then send to berries" },
    { villagerCount: "14", details: "Berries" },
    { villagerCount: "15", details: "Berries", footnote: "Then lure boar" },
  ];

  recommendedCivs = [
    new Britons(),
    new Berbers()
  ];
}