import { IBuildOrder, BuildOrderStep } from '../../model';
import { Britons, Aztecs, Ethiopians, Vietnamese, Japanese, Khmer, Mayans, Chinese, Huns, Italians, Vikings, Malay, Celts } from '../civs';
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
    { villagerCount: "21", details: "Wood", footnotes: ["Research loom"], idealTimeInSeconds: 475 },
    {
      villagerCount: "21", details: "Feudal Age", footnotes: [
        "Send 2 from sheep to wood.",
        "Send 3 from sheep to build mining camp and mine gold.",
        "Send 1 from food to build baracks."
      ], idealTimeInSeconds: 580, ageUpValue: "II"
    },
    {
      villagerCount: "22", details: "Gold", footnotes: [
        "Research double-bit axe",
        "Build 2 archery ranges with 2 wood villagers. Send back to wood.",
        "Build blacksmith ranges with 1 food villager. Send back to food.",
      ], idealTimeInSeconds: 605
    },
    {
      villagerCount: "23", details: "Gold", footnotes: [
        "Research fletching.",
      ], idealTimeInSeconds: 630
    },
    { villagerCount: "24", details: "Gold", idealTimeInSeconds: 655 },
    { villagerCount: "25", details: "Gold", idealTimeInSeconds: 680 },
    { villagerCount: "26", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 705 },
    { villagerCount: "26", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 730 },
    { villagerCount: "27", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 755 },
    { villagerCount: "28", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 780 },
    { villagerCount: "29", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 805 },
    { villagerCount: "30", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 730 },
    { villagerCount: "31", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 755 },
    { villagerCount: "32", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 780 },
    { villagerCount: "33", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 805 },
    { villagerCount: "34", details: "Wood", idealTimeInSeconds: 830 },
    { villagerCount: "35", details: "Gold", idealTimeInSeconds: 855 },
    {
      villagerCount: "35", details: "Castle Age", footnotes: [
        "Research horse collar.",
        "Research gold mining.",
      ], idealTimeInSeconds: 1015, ageUpValue: "III"
    },
  ];
  finalTips = "Once in the castle age, upgrade your archers to crossbowmen, research bodkin arrow, and bow saw.";
  recommendedCivs = [
    new Aztecs(),
    new Britons(),
    new Ethiopians(),
    new Vietnamese(),
    new Japanese(),
    new Khmer(),
    new Mayans(),
    new Vikings(),
    new Huns(),
    new Malay(),
    new Chinese(),
    new Italians(),
    new Celts()
  ];
}
