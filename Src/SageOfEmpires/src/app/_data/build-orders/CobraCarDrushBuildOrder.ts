import { IBuildOrder, BuildOrderStep } from '../../model';
export class CobraCarDrushBuildOrder implements IBuildOrder {
  name: string = "Cobra Car Drush";
  steps: BuildOrderStep[] = [
    { villagerCount: "3", details: "Type 'how do you turn this on' into chat.", footnotes: ["Find and destroy enemy villagers and town centre with the car."], idealTimeInSeconds: 30 },
  ];
  finalTips = "The cobra car has an speed bonus if you make car noises while moving it around the map.";
  hideOnYourOwn = true;
  recommendedCivs = [];
}
