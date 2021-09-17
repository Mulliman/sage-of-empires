import { IBuildOrder, BuildOrderStep, Food, Wood, Gold } from '../../../model';
import { Britons, Ethiopians, Mayans, Vietnamese } from '../../civs';

export class EWArcherRushBuildOrder implements IBuildOrder {
  name: string = "Empire Wars Archer Rush (Farm Man)";
  steps: BuildOrderStep[] = [
    { villagerCount: "28", details: "Queue 2 villagers", footnotes: ["Send 4 sheep villagers to berries."], idealTimeInSeconds: 3 },
    { villagerCount: "28", details: "Research double bit axe", idealTimeInSeconds: 5 },
    { villagerCount: "28", details: "Build house with wood villager", footnotes: ["Then start walling"], idealTimeInSeconds: 10 },
    { villagerCount: "28", details: "Build archery range with wood villager", footnotes: ["Then start walling"], idealTimeInSeconds: 15 },
    { villagerCount: "28", details: "Build walls with wood villager", idealTimeInSeconds: 20 },
    { villagerCount: "29", details: "Sheep", idealTimeInSeconds: 25 },
    { villagerCount: "30", details: "Sheep", idealTimeInSeconds: 50 },
    { villagerCount: "31", details: "Sheep", idealTimeInSeconds: 75 },
    { villagerCount: "32", details: "Sheep", idealTimeInSeconds: 100 },
    { villagerCount: "32", details: "Start queuing archers", footnotes: ["Every so often add in a spearman"], idealTimeInSeconds: 100 },
    { villagerCount: "33", details: "Gold", idealTimeInSeconds: 125 },
    { villagerCount: "34", details: "Gold", idealTimeInSeconds: 150 },
    { villagerCount: "35", details: "Gold", idealTimeInSeconds: 175 },
    { villagerCount: "35", details: "Research fletching", idealTimeInSeconds: 175 },
    { villagerCount: "36", details: "Gold", idealTimeInSeconds: 200 },
    { villagerCount: "36", details: "Build archery range with wood villager", footnotes: ["Then queue more archers"], idealTimeInSeconds: 200 },
    { villagerCount: "37", details: "Gold", idealTimeInSeconds: 225 },
    { villagerCount: "37", details: "Assign 3 sheep villagers to farms, send rest to gold", idealTimeInSeconds: 225 },
    { villagerCount: "38", details: "Gold", idealTimeInSeconds: 250 },
    { villagerCount: "39", details: "Gold", idealTimeInSeconds: 275 },
    { villagerCount: "40", details: "Gold", idealTimeInSeconds: 300 },
    { villagerCount: "41", details: "Wood", idealTimeInSeconds: 325 },
    { villagerCount: "42", details: "Wood", idealTimeInSeconds: 350 },
    { villagerCount: "43", details: "Wood", footnotes: ["Build 4 farms with berry villagers", "Take deer with remaining berry villagers when expired."], idealTimeInSeconds: 375 },
    { villagerCount: "44", details: "Wood", idealTimeInSeconds: 400 },
    { villagerCount: "45", details: "Wood", idealTimeInSeconds: 425 },
    { villagerCount: "46", details: "Wood", idealTimeInSeconds: 450 },
    {
      villagerCount: "46", details: "Castle Age",
      footnotes: [
        "Build second mining camp.",
        "Research horse collar.",
        "Research gold mining."
      ], idealTimeInSeconds: 610,
      ageUpValue: "III",
    }
  ];
  finalTips = "Depending on the situation you may want to boom, apply siege pressure, or go to fast imperial. Don't forget ballistics and blacksmith upgrades.";
  recommendedCivs = [
    new Britons(),
    new Ethiopians(),
    new Mayans(),
    new Vietnamese()
  ];
  externalProvider = "Farm Man";
  externalUrl = "https://www.youtube.com/watch?v=lyMvp1cWZ2c";
}