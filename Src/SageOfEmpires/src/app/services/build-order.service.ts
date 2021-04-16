import { Injectable, Output, EventEmitter } from '@angular/core';
import { IBuildOrder, BuildOrderStep, ICiv } from '../model';
import { Britons, Aztecs, Ethiopians, Vietnamese, Japanese, Khmer, Mayans, Franks } from '../civs';

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
    new ArcherRushBuildOrder(),
    new ScoutRushBuildOrder(),
    new CobraCarDrushBuildOrder()
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
    new Aztecs(),
    new Britons(),
    new Ethiopians(),
    new Vietnamese(),
    new Japanese(),
    new Khmer(),
    new Mayans()
  ];
}

export class ScoutRushBuildOrder implements IBuildOrder {
  name: string = "Scout Rush";
  steps: BuildOrderStep[] = [
    { villagerCount: "3", details: "Queue villagers", idealTimeInSeconds: 2 },
    { villagerCount: "3", details: "Build 2 houses", footnotes: ["Then send to sheep"], idealTimeInSeconds: 4 },
    { villagerCount: "4", details: "Sheep", idealTimeInSeconds: 25 },
    { villagerCount: "5", details: "Sheep", idealTimeInSeconds: 50 },
    { villagerCount: "6", details: "Sheep", idealTimeInSeconds: 75 },
    { villagerCount: "7", details: "Build lumber camp", footnotes: ["Then send to wood"], idealTimeInSeconds: 100 },
    { villagerCount: "8", details: "Wood", idealTimeInSeconds: 125 },
    { villagerCount: "9", details: "Wood", idealTimeInSeconds: 150 },
    { villagerCount: "10", details: "Build house and lure boar", idealTimeInSeconds: 175 },
    { villagerCount: "11", details: "Boar", idealTimeInSeconds: 200 },
    { villagerCount: "12", details: "Build mill", footnotes: ["Then send to berries"], idealTimeInSeconds: 225 },
    { villagerCount: "13", details: "Berries", idealTimeInSeconds: 250 },
    { villagerCount: "14", details: "Send a boar/sheep villager to build house near 2nd boar.", idealTimeInSeconds: 275 },
    { villagerCount: "14", details: "Berries", idealTimeInSeconds: 275 },
    { villagerCount: "15", details: "Berries", idealTimeInSeconds: 300 },
    { villagerCount: "15", details: "Lure 2nd boar.", idealTimeInSeconds: 300 },
    { villagerCount: "16", details: "Sheep/boar", idealTimeInSeconds: 325 },
    { villagerCount: "17", details: "Sheep/boar", idealTimeInSeconds: 350 },
    { villagerCount: "17", details: "Build 2 farms with weak villagers", idealTimeInSeconds: 350 },
    { villagerCount: "18", details: "Build lumber camp", footnotes: ["Then send to wood"], idealTimeInSeconds: 375 },
    { villagerCount: "19", details: "Wood", idealTimeInSeconds: 400 },
    { villagerCount: "20", details: "Wood", idealTimeInSeconds: 425 },
    { villagerCount: "21", details: "Wood", idealTimeInSeconds: 450 },
    { villagerCount: "21", details: "Loom", idealTimeInSeconds: 475 },
    { 
      villagerCount: "21", details: "Feudal Age", 
      footnotes: ["Send 4 from food to wood.", "Send 1 to build barracks and a house."],
      idealTimeInSeconds: 580,
      isAgeUp: true
    },
    { villagerCount: "22", details: "Build stable and then houses. Train scouts.", idealTimeInSeconds: 605 },
    { villagerCount: "23", details: "Farm", footnotes: ["Build farms with idle villagers."], idealTimeInSeconds: 630 },
    { villagerCount: "24", details: "Farm", idealTimeInSeconds: 630 },
    { villagerCount: "25", details: "Farm", idealTimeInSeconds: 655 },
    { villagerCount: "26", details: "Farm", idealTimeInSeconds: 680 },
    { villagerCount: "27", details: "Farm", idealTimeInSeconds: 705 },
    { villagerCount: "28", details: "Farm", idealTimeInSeconds: 730 },
    { villagerCount: "29", details: "Wood", idealTimeInSeconds: 755 },
    { villagerCount: "30", details: "Wood", footnotes: ["Send a villager to build a range. Train skirms"], idealTimeInSeconds: 780 },
    { villagerCount: "31", details: "Build mining camp on gold", footnotes: ["Send 2 from berries to gold"], idealTimeInSeconds: 805 },
    { villagerCount: "32", details: "Gold", idealTimeInSeconds: 730 },
    { villagerCount: "33", details: "Gold", idealTimeInSeconds: 855 },
    { villagerCount: "34", details: "Gold", idealTimeInSeconds: 880 },
    { villagerCount: "35", details: "Gold", footnotes: ["Don't forget to build a blacksmith and get fletching."], idealTimeInSeconds: 905 },
  ];

  finalTips = "Aim for castle age once you have over 6 scouts, 8 skirmishers and fletching.";

  recommendedCivs = [
    new Franks(),
  ];
}

export class CobraCarDrushBuildOrder implements IBuildOrder {
  name: string = "Cobra Car Drush";
  steps: BuildOrderStep[] = [
    { villagerCount: "3", details: "Type 'how do you turn this on' into chat,", footnotes: ["Find and destroy enemy villagers and town centre with the car."], idealTimeInSeconds: 30 },
  ];

  finalTips = "The cobra car has an speed bonus if you make car noises while moving it around the map.";
  hideOnYourOwn = true;
  
  recommendedCivs = [];
}