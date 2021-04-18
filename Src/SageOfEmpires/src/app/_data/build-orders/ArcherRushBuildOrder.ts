import { IBuildOrder, BuildOrderStep, Food, Wood, Gold } from '../../model';
import { Britons, Aztecs, Ethiopians, Vietnamese, Japanese, Khmer, Mayans, Chinese, Huns, Italians, Vikings, Malay, Celts } from '../civs';
export class ArcherRushBuildOrder implements IBuildOrder {
  name: string = "Archer Rush";
  steps: BuildOrderStep[] = [
    { villagerCount: "3", details: "Queue villagers", idealTimeInSeconds: 2 },
    { villagerCount: "3", details: "Build 2 houses", footnotes: ["Then send to sheep"], idealTimeInSeconds: 4 },
    { villagerCount: "4", details: "Sheep", idealTimeInSeconds: 25, resources: [ new Food(4) ] },
    { villagerCount: "5", details: "Sheep", idealTimeInSeconds: 50, resources: [ new Food(5) ] },
    { villagerCount: "6", details: "Sheep", idealTimeInSeconds: 75, resources: [ new Food(6) ] },
    { villagerCount: "7", details: "Build lumber camp", footnotes: ["Then send to wood"], idealTimeInSeconds: 100, resources: [ new Wood(1), new Food(6) ] },
    { villagerCount: "8", details: "Wood", idealTimeInSeconds: 125, resources: [ new Wood(2), new Food(6) ] },
    { villagerCount: "9", details: "Wood", idealTimeInSeconds: 150, resources: [ new Wood(3), new Food(6) ] },
    { villagerCount: "10", details: "Wood", idealTimeInSeconds: 175, resources: [ new Wood(4), new Food(6)  ] },
    { villagerCount: "11", details: "Lure boar", idealTimeInSeconds: 200, resources: [ new Wood(4), new Food(7)  ]  },
    { villagerCount: "12", details: "Build 2 houses", footnotes: ["Then send to berries"], idealTimeInSeconds: 225, resources: [ new Wood(4), new Food(8)  ]  },
    { villagerCount: "13", details: "Build mill", footnotes: ["Then send to berries"], idealTimeInSeconds: 250, resources: [ new Wood(4), new Food(9)  ]  },
    { villagerCount: "14", details: "Berries", idealTimeInSeconds: 275, resources: [ new Wood(4), new Food(10)  ]  },
    { villagerCount: "15", details: "Berries", footnotes: ["Then lure boar"], idealTimeInSeconds: 300, resources: [ new Wood(4), new Food(11)  ]  },
    { villagerCount: "16", details: "Sheep/boar", idealTimeInSeconds: 325, resources: [ new Wood(4), new Food(12)  ]  },
    { villagerCount: "17", details: "Sheep/boar", idealTimeInSeconds: 350, resources: [ new Wood(4), new Food(13)  ]  },
    { villagerCount: "18", details: "Build lumber camp", footnotes: ["Then send to wood"], idealTimeInSeconds: 375, resources: [ new Wood(5), new Food(13) ]  },
    { villagerCount: "19", details: "Wood", idealTimeInSeconds: 400, resources: [ new Wood(6), new Food(13) ] },
    { villagerCount: "20", details: "Wood", idealTimeInSeconds: 425, resources: [ new Wood(7), new Food(13) ] },
    { villagerCount: "21", details: "Wood", footnotes: ["Research loom"], idealTimeInSeconds: 475, resources: [ new Wood(8), new Food(13) ] },
    {
      villagerCount: "21", details: "Feudal Age", footnotes: [
        "Send 2 from sheep to wood.",
        "Send 3 from sheep to build mining camp and mine gold.",
        "Send 1 from food to build baracks."
      ], idealTimeInSeconds: 580, ageUpValue: "II", resources: [ new Wood(10), new Food(7), new Gold(3) ]
    },
    {
      villagerCount: "22", details: "Gold", footnotes: [
        "Research double-bit axe",
        "Build 2 archery ranges with 2 wood villagers. Send back to wood.",
        "Build blacksmith ranges with 1 food villager. Send back to food.",
      ], idealTimeInSeconds: 605, resources: [ new Wood(10), new Food(8), new Gold(4) ]
    },
    {
      villagerCount: "23", details: "Gold", footnotes: [
        "Research fletching.",
      ], idealTimeInSeconds: 630, resources: [ new Wood(10), new Food(8), new Gold(5) ]
    },
    { villagerCount: "24", details: "Gold", idealTimeInSeconds: 655, resources: [ new Wood(10), new Food(8), new Gold(6) ] },
    { villagerCount: "25", details: "Gold", idealTimeInSeconds: 680, resources: [ new Wood(10), new Food(8), new Gold(7) ] },
    { villagerCount: "26", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 705, resources: [ new Wood(10), new Food(9), new Gold(7) ] },
    { villagerCount: "27", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 730, resources: [ new Wood(10), new Food(10), new Gold(7) ] },
    { villagerCount: "28", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 755, resources: [ new Wood(10), new Food(11), new Gold(7) ] },
    { villagerCount: "29", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 780, resources: [ new Wood(10), new Food(12), new Gold(7) ] },
    { villagerCount: "30", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 805, resources: [ new Wood(10), new Food(13), new Gold(7) ] },
    { villagerCount: "31", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 830, resources: [ new Wood(10), new Food(14), new Gold(7) ] },
    { villagerCount: "32", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 855, resources: [ new Wood(10), new Food(15), new Gold(7) ] },
    { villagerCount: "33", details: "Farm (Stragglers if not enough wood)", idealTimeInSeconds: 880, resources: [ new Wood(10), new Food(16), new Gold(7) ] },
    { villagerCount: "34", details: "Wood", idealTimeInSeconds: 905, resources: [ new Wood(11), new Food(16), new Gold(7) ] },
    { villagerCount: "35", details: "Gold", idealTimeInSeconds: 930, resources: [ new Wood(11), new Food(16), new Gold(8) ] },
    {
      villagerCount: "35", details: "Castle Age", footnotes: [
        "Research horse collar.",
        "Research gold mining.",
      ], idealTimeInSeconds: 1090, ageUpValue: "III"
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
