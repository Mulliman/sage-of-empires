import { Injectable, Output, EventEmitter } from '@angular/core';
import { IBuildOrder, ICiv, BuildOrderStep, Wood, Food, Gold, Stone, toSeconds, capitalize } from '../model';
import { CobraCarDrushBuildOrder } from '../_data/build-orders/CobraCarDrushBuildOrder';
import { ScoutRushBuildOrder } from '../_data/build-orders/ScoutRushBuildOrder';
import { ArcherRushBuildOrder } from '../_data/build-orders/ArcherRushBuildOrder';
import { DrushFastCastleBuildOrder } from '../_data/build-orders/DrushFastCastleBuildOrder';
import { CommunityBuildOrder } from '../_data/build-orders/community/CommunityBuildOrder';
import { BuildOrderGuide, Build } from '../_data/build-orders/community/buildorderguide.com/BuildOrderGuideFormat';
import { isNumber } from 'util';
import buildorderguideArcherRushHera from '../_data/build-orders/community/buildorderguide.com/buildorderguide-ArcherRushHera.json';

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

  public communityBuildOrders: IBuildOrder[] = [];

  constructor() {
    this.communityBuildOrders.push(new BuildOrderGuideBuilder(buildorderguideArcherRushHera).build());
  }

  getRecommendedBuildOrders(civ: ICiv): IBuildOrder[] {
    return this.buildOrders.filter(bo => bo.name == civ.name);
  }

  setSelectedBuildOrder(buildOrder: IBuildOrder) {
    this.selectedBuildOrder = buildOrder;

    this.onBuildOrderSelected.emit(this.selectedBuildOrder);
  }

  setLastTimeSetAsDone(value: number) {
    this.lastTimeSetAsDone = value;
    this.onStepSetAsDone.emit(this.lastTimeSetAsDone);
  }
}

export class BuildOrderGuideBuilder {

  constructor(private json: BuildOrderGuide) {
  }

  build(): IBuildOrder {
    var bo = new CommunityBuildOrder();

    bo.name = `${this.json.title} (${this.json.author})`;

    let currentVilEndCount: number = 0;
    let currentVilStartCount: number = 0;
    let hasFeudaled = false;
    let hasCastled = false;

    for (const communityStep of this.json.build) {

      var step = new BuildOrderStep();

      if (communityStep.type == "newVillagers") {
        if (communityStep.type == "newVillagers" && isNumber(communityStep.count)) {
          currentVilStartCount = currentVilEndCount + 1;
          currentVilEndCount += <number>communityStep.count;
        }

        // Take off starting vils from count.
        var newVilsAmount = bo.steps.length < 1 ? <number>communityStep.count - 3 : communityStep.count;

        step.details = capitalize(communityStep.task) + ` (+${newVilsAmount})`;
        step.villagerCount = currentVilStartCount.toString();
        step.villagerCountEnd = currentVilEndCount.toString();
        step.idealTimeInSeconds = this.predictIdealTime(currentVilEndCount, hasFeudaled, hasCastled);

        this.addResourcesToStep(step, communityStep);
        this.addFootnotesToStep(step, communityStep);

        bo.steps.push(step);
      } else if (communityStep.type == "ageUp") {
        let step = this.createAgeUpStep(communityStep);
        bo.steps.push(step);

        if(step.ageUpValue == "II"){
          hasFeudaled = true;
        }

        if(step.ageUpValue == "III"){
          hasCastled = true;
        }
      } else {
        this.addFootnotesToStep(bo.steps[bo.steps.length - 1], communityStep);
      }
    }

    return bo;
  }

  addFootnotesToStep(lastStep: BuildOrderStep, communityStep: Build) {
    if (!lastStep.footnotes) {
      lastStep.footnotes = [];
    }

    if (communityStep.tech) {
      for (const tech of communityStep.tech) {
        lastStep.footnotes.push("Research " + tech);
      }
    }

    if (communityStep.type == "moveVillagers") {
      lastStep.footnotes.push("Move " + communityStep.count + " from " + communityStep.from + " to " + communityStep.to);
    }

    if (communityStep.type == "trainUnit") {
      lastStep.footnotes.push("Train " + communityStep.count + " " + communityStep.unit);
    }

    if (communityStep.buildings) {
      for (const building of communityStep.buildings) {
        if(building.count > 1){
          lastStep.footnotes.push("Build " + building.type + " (x" + building.count + ")");
        } else{
          lastStep.footnotes.push("Build " + building.type);
        }
      }
    }
  }

  createAgeUpStep(communityStep: Build): BuildOrderStep {
    var step = new BuildOrderStep();

    switch (communityStep.age) {
      case "feudalAge":
        step.ageUpValue = "II";
        step.idealTimeInSeconds = toSeconds(this.json.uptime.feudalAge);
        step.details = "Feudal Age";
        break;
      case "castleAge":
        step.ageUpValue = "III";
        step.idealTimeInSeconds = toSeconds(this.json.uptime.castleAge);
        step.details = "Castle Age";
        break;
      case "imperialAge":
        step.ageUpValue = "IV";
        step.details = "Imperial Age";
        break;
    }

    this.addResourcesToStep(step, communityStep);

    return step;
  }

  addResourcesToStep(step: BuildOrderStep, communityStep: Build) {
    if (communityStep.resources) {
      step.resources = [];

      if (communityStep.resources.wood) step.resources.push(new Wood(communityStep.resources.wood));
      if (communityStep.resources.food) step.resources.push(new Food(communityStep.resources.food));
      if (communityStep.resources.gold) step.resources.push(new Gold(communityStep.resources.gold));
      if (communityStep.resources.stone) step.resources.push(new Stone(communityStep.resources.stone));
    }
  }

  predictIdealTime(currentVilEndCount: number, hasFeudaled: boolean, hasCastled: boolean) : number{
    var idealTime = 0;

    var vilTime = (currentVilEndCount - 3) * 25;

    idealTime = idealTime + vilTime;

    if(hasFeudaled){
      idealTime += 130; // feudal
      idealTime += 25; // assume loom
    }

    if(hasCastled){
      idealTime += 160; // castle
    }

    return idealTime;
  }

}