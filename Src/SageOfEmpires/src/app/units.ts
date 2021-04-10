import { IUnit } from './model';

export class JaguarWarrior implements IUnit{
    strengths: string = "Good vs other infantry.";
    weaknesses: string = "Weak vs archers, cannoneers, and heavy cavalry.";
    name: any = "Jaguar Warrior";
  
  }
  
export class Longbowman implements IUnit{
    strengths: string = "Very long range and good vs infantry. Best when massed.";
    weaknesses: string = "Weak vs cavalry, huskarls, eagle warriors, skirmishers and siege.";
    name: any = "Longbowman";
}
  