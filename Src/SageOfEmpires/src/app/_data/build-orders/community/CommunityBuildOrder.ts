import { IBuildOrder, BuildOrderStep } from '../../../model';
export class CommunityBuildOrder implements IBuildOrder {
  name: string = "";
  steps: BuildOrderStep[] = [];
  finalTips = "";
  hideOnYourOwn = true;
  recommendedCivs = [];
}