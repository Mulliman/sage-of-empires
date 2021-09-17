import { IBuildOrder, BuildOrderStep, Food, Wood, Gold } from '../../../model';
import { Franks, Magyars, Bulgarians } from '../../civs';

export class EWSkirmisherDefenseBuildOrder implements IBuildOrder {
  name: string = "Empire Wars Skirmishers & Knights (Morley)";
  steps: BuildOrderStep[] = [
    { villagerCount: "28", details: "Queue 2 villagers", idealTimeInSeconds: 3 },
    { villagerCount: "28", details: "Research double bit axe", idealTimeInSeconds: 5 },
    { villagerCount: "28", details: "Build archery range with wood villager", footnotes: ["Then start walling"], idealTimeInSeconds: 10 },
    { villagerCount: "28", details: "Build house with 2 gold villagers", footnotes: ["Then start walling"], idealTimeInSeconds: 15 },
    { villagerCount: "29", details: "Sheep", idealTimeInSeconds: 25 },
    { villagerCount: "30", details: "Berries", idealTimeInSeconds: 50 },
    { villagerCount: "30", details: "Research double bit axe", idealTimeInSeconds: 50 },
    { villagerCount: "31", details: "Berries", idealTimeInSeconds: 75 },
    { villagerCount: "32", details: "Farm", idealTimeInSeconds: 100 },
    { villagerCount: "32", details: "Start creating skirmishers", idealTimeInSeconds: 100 },
    { villagerCount: "33", details: "Farm", idealTimeInSeconds: 125 },
    { villagerCount: "34", details: "Farm", idealTimeInSeconds: 150 },
    { villagerCount: "35", details: "Farm", idealTimeInSeconds: 175 },
    { villagerCount: "36", details: "Farm", idealTimeInSeconds: 200 },
    { villagerCount: "37", details: "Farm", idealTimeInSeconds: 225 },
    { villagerCount: "37", details: "Create farms with 3 sheep villagers, send rest to gold", idealTimeInSeconds: 225 },
    { villagerCount: "38", details: "Farm", idealTimeInSeconds: 250 },
    { villagerCount: "39", details: "Farm", idealTimeInSeconds: 275 },
    {
      villagerCount: "39", details: "Castle Age",
      footnotes: [
        "Research Horse Collar.",
        "Create stable.",
        "Research Forging and Scale Barding",
        "Research Bloodlines",
        "Create farms with berry villagers"
      ], idealTimeInSeconds: 435,
      ageUpValue: "III",
    },
    { villagerCount: "40", details: "Gold", idealTimeInSeconds: 460 },
    { villagerCount: "40", details: "Create second stable", footnotes: ["Create knights as soon as possible"], idealTimeInSeconds: 460 },
    { villagerCount: "41", details: "Gold", idealTimeInSeconds: 485 },
    { villagerCount: "42", details: "Gold", idealTimeInSeconds: 505 }
  ];
  finalTips = "Start attacking with knights. Research wheelbarrow and bow saw. Continue making farms and mining gold with new villagers and think of adding futher town centers.";
  recommendedCivs = [
    new Franks(),
    new Magyars(),
    new Bulgarians()
  ];
  externalProvider = "Morley Games";
  externalUrl = "https://www.youtube.com/watch?v=G2QzecvQeFE";
}