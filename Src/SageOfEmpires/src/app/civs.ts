import { ICiv, IUnit, ITech } from './model';
import { Longbowman, JaguarWarrior } from './units';

export class Aztecs implements ICiv {
    armyType = "Infantry and Monk";
    uniqueUnits = [ new JaguarWarrior() ];
    castleTech = { name: "Atlatl", details: "Gives Skirmishers +1 attack and range." };
    imperialTech = { name: "Garland Wars", details: "Gives infantry +4 attack." };
    teamBonus = "Relics generate +33% gold.";
    civBonuses: [
        "Villagers carry +3 extra resources.",
        "All military units are created 11% faster.",
        "Monks gain 5 HP for every researched Monastery technology.",
        "Start with +50 gold."
    ];
    name: any = "Aztecs";
}

export class Britons implements ICiv {
    armyType = "Archer";
    uniqueUnits = [ new Longbowman() ];
    castleTech = { name: "Yeomen", details: "Gives foot archers +1 range and towers +2 attack." };
    imperialTech = { name: "Warwolf", details: "Gives Trebuchets blast damage and 100% accuracy against units" };
    teamBonus = "Archery Ranges work 20% faster.";
    civBonuses: [
        "Town Centers cost -50% wood starting in the Castle Age.",
        "Foot archers (except Skirmishers) have +1/+2 range in the Castle/Imperial Age.",
        "Shepherds work 25% faster."
    ];
    name: any = "Britons";
}

