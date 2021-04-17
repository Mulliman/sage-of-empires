import { IBuildOrder, BuildOrderStep } from '../../model';
import { Britons, Aztecs, Ethiopians, Burmese, Chinese, Malians, Vikings } from '../civs';

export class DrushFastCastleBuildOrder implements IBuildOrder {
  name: string = "Drush Fast Castle";
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
    { villagerCount: "16", details: "Mine 10 gold", footnotes: ["Then send to wood"], idealTimeInSeconds: 325 },
    { villagerCount: "17", details: "Build barracks", footnotes: ["Then send to sheep/boar", "Build 3 militia"], idealTimeInSeconds: 350 },
    { villagerCount: "18", details: "Wood", idealTimeInSeconds: 375 },
    { villagerCount: "19", details: "Wood", idealTimeInSeconds: 400 },
    { villagerCount: "20", details: "Wood", idealTimeInSeconds: 400 },
    { villagerCount: "21", details: "Berries", idealTimeInSeconds: 425 },
    { villagerCount: "22", details: "Berries", idealTimeInSeconds: 450 },
    { villagerCount: "23", details: "Farm", idealTimeInSeconds: 475 },
    { villagerCount: "24", details: "Farm", idealTimeInSeconds: 500 },
    { villagerCount: "25", details: "Farm", idealTimeInSeconds: 525 },
    { villagerCount: "26", details: "Farm", idealTimeInSeconds: 550 },
    { villagerCount: "27", details: "Farm", idealTimeInSeconds: 575 },
    { villagerCount: "28", details: "Farm", footnotes: ["Research loom"], idealTimeInSeconds: 625 },
    {
      villagerCount: "28", details: "Feudal Age",
      footnotes: [
        "Send 2 from sheep to farms.",
        "Send 4 from sheep/boar once depleted to build mining camp and mine gold.",
      ], idealTimeInSeconds: 710,
      ageUpValue: "II"
    },
    {
      villagerCount: "29", details: "Gold",
      footnotes: [
        "Research double-bit axe",
        "Build 2 archery ranges with 2 wood villagers. Send back to wood.",
        "Build blacksmith ranges with 1 food villager. Send back to food.",
      ], idealTimeInSeconds: 735
    },
    { villagerCount: "30", details: "Gold", idealTimeInSeconds: 760 },
    {
      villagerCount: "30", details: "Castle Age",
      footnotes: [
        "Send berries villagers to wood and gold when depleted.",
        "Keep building archers.",
        "Research fletching."
      ], idealTimeInSeconds: 920,
      ageUpValue: "III"
    },
  ];
  finalTips = "Once in the castle age, upgrade your archers to crossbowmen, research bodkin arrow, and bow saw. Or you could transistion into knights.";
  recommendedCivs = [
    new Aztecs(),
    new Britons(),
    new Ethiopians(),
    new Malians(),
    new Vikings(),
    new Chinese(),
    new Burmese()
  ];
}
