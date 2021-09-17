import { IBuildOrder, BuildOrderStep, Food, Wood, Gold } from '../../../model';
import { Franks, Magyars, Bulgarians } from '../../civs';

export class EWScoutRushBuildOrder implements IBuildOrder {
  name: string = "Empire Wars Scout Rush (Farm Man)";
  steps: BuildOrderStep[] = [
    { villagerCount: "28", details: "Queue 2 villagers", idealTimeInSeconds: 2 },
    { villagerCount: "28", details: "Research double bit axe", idealTimeInSeconds: 3 },
    { villagerCount: "28", details: "Build house with gold villager", footnotes: ["Then build stable"], idealTimeInSeconds: 4 },
    { villagerCount: "29", details: "Sheep", idealTimeInSeconds: 25 },
    { villagerCount: "30", details: "Sheep", idealTimeInSeconds: 50 },
    { villagerCount: "30", details: "Send remaining gold villagers to berries once at 150 gold", idealTimeInSeconds: 60 },
    { villagerCount: "30", details: "Farm", idealTimeInSeconds: 75 },
    { villagerCount: "31", details: "Farm", idealTimeInSeconds: 100 },
    { villagerCount: "32", details: "Farm", idealTimeInSeconds: 125 },
    { villagerCount: "33", details: "Build house with builder", footnotes: ["Then build stable and more houses"], idealTimeInSeconds: 135 },
    { villagerCount: "33", details: "Start training scouts", idealTimeInSeconds: 135 },
    { villagerCount: "33", details: "Research forging", idealTimeInSeconds: 135 },
    { villagerCount: "33", details: "Farm", idealTimeInSeconds: 150 },
    { villagerCount: "34", details: "Farm", idealTimeInSeconds: 175 },
    { villagerCount: "35", details: "Farm", idealTimeInSeconds: 200 },
    { villagerCount: "35", details: "Research horse collar", idealTimeInSeconds: 200 },
    { villagerCount: "36", details: "Farm", idealTimeInSeconds: 225 },
    { villagerCount: "37", details: "Farm", idealTimeInSeconds: 250 },
    { villagerCount: "38", details: "Farm", idealTimeInSeconds: 275 },
    { villagerCount: "38", details: "Research bloodlines", idealTimeInSeconds: 275 },
    { villagerCount: "39", details: "Berries", footnotes: ["When sheep run out, also send to berries."], idealTimeInSeconds: 300 },
    { villagerCount: "40", details: "Berries", idealTimeInSeconds: 325 }
  ];
  finalTips = "Depending on the situation you may want to add more stables and continue feudal pressure or start thinking about going up to castle.";
  recommendedCivs = [
    new Franks(),
    new Magyars(),
    new Bulgarians()
  ];
  externalProvider = "Farm Man";
  externalUrl = "https://www.youtube.com/watch?v=9yzivYbJEic";
}