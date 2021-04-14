import { IUnit, UnitBase, Food, Gold, Wood } from './model';

export class JaguarWarrior extends UnitBase{
    strengths: string = "Good vs other infantry.";
    weaknesses: string = "Weak vs archers, cannoneers, and heavy cavalry.";
    name: any = "Jaguar Warrior";
    costs = [ new Food(60), new Gold(30)];
  }
  
export class Longbowman extends UnitBase{
    strengths: string = "Very long range and good vs infantry. Best when massed.";
    weaknesses: string = "Weak vs cavalry, huskarls, eagle warriors, skirmishers and siege.";
    name: any = "Longbowman";
    costs = [ new Wood(35), new Gold(40)];
}
  
export class Cataphract extends UnitBase{
  strengths: string = "Excels vs infantry.";
  weaknesses: string = "Weak vs heavy cavalry, massed archers, and monks.";
  name: any = "Cataphract";
  costs = [ new Food(70), new Gold(75)];
}

export class WoadRaider extends UnitBase{
  strengths: string = "Very fast, string against buildings, good for raiding.";
  weaknesses: string = "Weak vs strong infantry units, heavy cavalry and mass archers.";
  name: any = "Woad Raider";
  costs = [ new Food(65), new Gold(25)];
}

export class ChuKoNu extends UnitBase{
  strengths: string = "Strong vs infantry, rams, and buildings";
  weaknesses: string = "Weak vs Skirmishers, siege, cavalry, eagle warriors, and huskarls.";
  name: any = "Chu Ko Nu";
  costs = [ new Wood(40), new Gold(35)];
}

export class ThrowingAxeman extends UnitBase{
  strengths: string = "Strong vs trash, buildings and rams/trebs.";
  weaknesses: string = "Weak vs archers and melee units.";
  name: any = "Throwing Axeman";
  costs = [ new Food(55), new Gold(25)];
}

export class Huskarl extends UnitBase{
  strengths: string = "Strong vs archers, gunpowder, and buildings.";
  weaknesses: string = "Weak vs melee units and mangonels.";
  name: any = "Huskarl";
  costs = [ new Food(56), new Gold(28)];
}

export class Samurai extends UnitBase{
  strengths: string = "Strong vs unique units and trash.";
  weaknesses: string = "Weak vs archers, gunpowder and heavy cavalry.";
  name: any = "Samurai";
  costs = [ new Food(60), new Gold(30)];
}

export class Mangudai extends UnitBase{
  strengths: string = "Strong vs infantry, villagers and siege.";
  weaknesses: string = "Weak vs camels, heavy cavalry, halberdiers, and skirmishers.";
  name: any = "Mangudai";
  costs = [ new Wood(55), new Gold(65)];
}

export class WarElephant extends UnitBase{
  strengths: string = "Strong vs melee and buildings.";
  weaknesses: string = "Weak vs pikeman, camels and, monks.";
  name: any = "War Elephant";
  costs = [ new Food(200), new Gold(75)];
}

export class Mameluke extends UnitBase{
  strengths: string = "Strong vs siege, cavalry and other melee units.";
  weaknesses: string = "Weak vs pikeman and camels.";
  name: any = "Mameluke";
  costs = [ new Food(55), new Gold(85)];
}

export class TeutonicKnight extends UnitBase{
  strengths: string = "Strong vs skirmishers, buildings, and other melee units.";
  weaknesses: string = "Weak vs archers, gunpowder, and scorpions/mangonels.";
  name: any = "Teutonic Knight";
  costs = [ new Food(85), new Gold(40)];
}

export class Janissary extends UnitBase{
  strengths: string = "Strong vs infantry and buildings.";
  weaknesses: string = "Weak vs skirmishers, scorpions/mangonels, and condottieri.";
  name: any = "Janissary";
  costs = [ new Food(60), new Gold(55)];
}

export class Berserk extends UnitBase{
  strengths: string = "Strong vs trash, buildings, camels and eagle warriors.";
  weaknesses: string = "Weak vs gunpowder and scorpions.";
  name: any = "Berserk";
  costs = [ new Food(65), new Gold(25)];
}

export class Longboat extends UnitBase{
  strengths: string = "Strong vs buildings, fishing ships, and transport ships. Slightly stronger than galleon.";
  weaknesses: string = "Weak vs demo ships and fireships when in small groups.";
  name: any = "Longboat";
  costs = [ new Wood(85), new Gold(80)];
}

export class Tarkan extends UnitBase{
  strengths: string = "Strong vs archers, buildings, siege and light cavalry.";
  weaknesses: string = "Weak vs infantry, heavy cavalry, and camels.";
  name: any = "Tarkan";
  costs = [ new Food(60), new Gold(60)];
}

export class WarWagon extends UnitBase{
  strengths: string = "Strong vs archers and infantry.";
  weaknesses: string = "Weak vs pikemen, skirmishers, monks, cavalry, and camels.";
  name: any = "War Wagon";
  costs = [ new Wood(92), new Gold(60)];
}

export class TurtleShip extends UnitBase{
  strengths: string = "Strong vs close ships and buildings.";
  weaknesses: string = "Weak vs monks and hit and run tactics.";
  name: any = "Turtle Ship";
  costs = [ new Wood(152), new Gold(180)];
}

export class PlumedArcher extends UnitBase{
  strengths: string = "Strong vs archers, gunpowder and infantry.";
  weaknesses: string = "Weak vs skirmishers, cavalry, and scorpions/mangonels.";
  name: any = "Plumed Archer";
  costs = [ new Wood(44), new Gold(44)];
}

export class Conquistador extends UnitBase{
  strengths: string = "Strong vs infantry and rams.";
  weaknesses: string = "Weak vs skirmishers, camels, pikemen, eagle warriors, and mangonels.";
  name: any = "Conquistador";
  costs = [ new Food(60), new Gold(70)];
}

export class Missionary extends UnitBase{
  strengths: string = "Strong vs knights and slow non-ranged units.";
  weaknesses: string = "Weak vs trash, eagles warriors and archers.";
  name: any = "Missionary";
  costs = [ new Gold(100)];
}

export class Kamayuk extends UnitBase{
  strengths: string = "Strong vs skirmishers, cavalry, cavalry archers, spearmen, rams.";
  weaknesses: string = "Weak vs gunpowder and scorpions/mangonels.";
  name: any = "Kamayuk";
  costs = [ new Food(60), new Gold(30)];
}

export class Slinger extends UnitBase{
  strengths: string = "Strong vs infantry and villagers.";
  weaknesses: string = "Weak vs skirmishers, cavalry, and scorpions/mangonels.";
  name: any = "Slinger";
  costs = [ new Food(30), new Gold(40)];
}

export class ElephantArcher extends UnitBase{
  strengths: string = "Strong vs slow non-ranged units, archers, and buildings.";
  weaknesses: string = "Weak vs pikemen, skirmishers, camels, eagle warriors, and monks.";
  name: any = "Elephant Archer";
  costs = [ new Food(100), new Gold(70)];
}

export class ImperialCamelRider extends UnitBase{
  strengths: string = "Strong vs cavalry, cavalry archers, siege, skirmishers.";
  weaknesses: string = "Weak vs pikemen.";
  name: any = "Imperial Camel Rider";
  costs = [ new Food(55), new Gold(60)];
}

export class GenoeseCrossbowman extends UnitBase{
  strengths: string = "Strong vs cavalry, cavalry archers, and infantry.";
  weaknesses: string = "Weak vs archers, eagle warriors, and scorpions/mangonels.";
  name: any = "Genoese Crossbowman";
  costs = [ new Wood(45), new Gold(40)];
}

export class Condottiero extends UnitBase{
  strengths: string = "Strong vs skrimishers, gunpowder and siege.";
  weaknesses: string = "Weak vs archers and scorpions. Cost more gold than champions.";
  name: any = "Condottiero";
  costs = [ new Food(50), new Gold(35)];
}

export class MagyarHuszar extends UnitBase{
  strengths: string = "Strong vs archers, skirmishers, and siege.";
  weaknesses: string = "Weak vs pikemen and camels.";
  name: any = "Magyar Huszar";
  costs = [ new Food(80), new Gold(10)];
}

export class Boyar extends UnitBase{
  strengths: string = "Strong vs melee units, skirmishers, and siege.";
  weaknesses: string = "Weak vs pikemen, monks, and camels.";
  name: any = "Boyar";
  costs = [ new Food(50), new Gold(80)];
}

export class CamelArcher extends UnitBase{
  strengths: string = "Strong vs slow non-ranged units, cavalry archers, and conquistadors.";
  weaknesses: string = "Weak vs Skirmishers, eagle warriors, mangonels, and camels.";
  name: any = "Camel Archer";
  costs = [ new Wood(50), new Gold(60)];
}

export class Genitour extends UnitBase{
  strengths: string = "Strong vs archers and cavalry archers.";
  weaknesses: string = "Weak vs pikemen, siege, eagle warriors, and camels.";
  name: any = "Genitour";
  costs = [ new Food(50), new Wood(35)];
}

export class ShotelWarrior extends UnitBase{
  strengths: string = "Fast unit strong vs villagers, trash, monks, and siege.";
  weaknesses: string = "Weak vs cavalry archers, mangonels, infantry, heavy cavalry and gunpowder.";
  name: any = "Shotel Warrior";
  costs = [ new Food(50), new Gold(30)];
}

export class Gbeto extends UnitBase{
  strengths: string = "Strong vs skirmishers, pikmen, infantry cavalry archers, and battering rams.";
  weaknesses: string = "Weak vs mangonels, heavy cavalry, monks and gunpowder.";
  name: any = "Gbeto";
  costs = [ new Food(50), new Gold(40)];
}

export class OrganGun extends UnitBase{
  strengths: string = "Strong vs skirmishers, villagers, large groups of units.";
  weaknesses: string = "Weak vs condottieri, cavalry, onagers, huskarls, and mangudai.";
  name: any = "Organ Gun";
  costs = [ new Wood(80), new Gold(56)];
}

export class Caravel extends UnitBase{
  strengths: string = "Strong vs densely packed ships, cannon galleons, fishing ships, and transport ships.";
  weaknesses: string = "Weak vs fire ships, turtle ships, and longboats.";
  name: any = "Caravel";
  costs = [ new Wood(90), new Gold(34)];
}

export class Arambai extends UnitBase{
  strengths: string = "Strong vs densely packed units, infantry, villagers, and monks.";
  weaknesses: string = "Weak vs skirmishers, archers, camels, and eagle warriors.";
  name: any = "Arambai";
  costs = [ new Wood(75), new Gold(60)];
}

export class BallistaElephant extends UnitBase{
  strengths: string = "Strong vs densely packed units, archers, infantry and buildings. Can cut trees.";
  weaknesses: string = "Weak vs halberdiers, siege, eagle warriors, and camels.";
  name: any = "Ballista Elephant";
  costs = [ new Food(100), new Gold(80)];
}

export class KarambitWarrior extends UnitBase{
  strengths: string = "Only take 0.5 population spot. Strong vs skirmishers, spearmen, eagle warriors, and rams.";
  weaknesses: string = "Weak vs archers, cavalry archers, gunpowder, heavy cavalry, and heavy infantry.";
  name: any = "Karambit Warrior";
  costs = [ new Food(25), new Gold(15)];
}

export class RattanArcher extends UnitBase{
  strengths: string = "Strong vs archers and infantry.";
  weaknesses: string = "Weak vs cavalry, siege and eagle warriors.";
  name: any = "Rattan Archer";
  costs = [ new Wood(50), new Gold(45)];
}

export class ImperialSkirmisher extends UnitBase{
  strengths: string = "Strong vs archers and spearmen.";
  weaknesses: string = "Weak vs melee units and siege.";
  name: any = "Imperial Skirmisher";
  costs = [ new Food(25), new Wood(35)];
}

export class Konnik extends UnitBase{
  strengths: string = "Turns into dismounted unit when killed. Strong vs infantry and villagers. Also good vs archers and siege when mounted.";
  weaknesses: string = "Weak vs spearmen, elephants, and camels when mounted. Weak vs archers, elephants, and scorpions/mangonels when dismounted.";
  name: any = "Konnik";
  costs = [ new Food(60), new Gold(70)];
}

export class Kipchak extends UnitBase{
  strengths: string = "String vs slow and non-ranged units, rams.";
  weaknesses: string = "Weak vs skirmishers, camels, eagle warriors, and scorpions/mangonels.";
  name: any = "Kipchak";
  costs = [ new Wood(60), new Gold(35)];
}

export class Leitis extends UnitBase{
  strengths: string = "Strong vs melee units (especially teutonic knights and boyars).";
  weaknesses: string = "Weak vs pikemen, camels, elephants, monks, and large groups of archers.";
  name: any = "Leitis";
  costs = [ new Food(70), new Gold(50)];
}

export class Keshik extends UnitBase{
  strengths: string = "Strong vs infatry, archers, villagers, siege, cavalry archers and light cavalry.";
  weaknesses: string = "Weak vs pikemen, camels, elephants, monks, and knights.";
  name: any = "Keshik";
  costs = [ new Food(60), new Gold(40)];
}

export class FlamingCamel extends UnitBase{
  strengths: string = "Strong vs Buildings and cavalry (especially elephants).";
  weaknesses: string = "Weak vs archers, castles, towers, monks, and infantry.";
  name: any = "Flaming Camel";
  costs = [ new Food(75), new Gold(30)];
}

export class Coustillier extends UnitBase{
  strengths: string = "Strong vs infantry, archers, villagers, siege, cavalry archers, and light cavalry.";
  weaknesses: string = "Weak vs heavy cavalry, camels, elephants, and halberdiers (if massed).";
  name: any = "Coustillier";
  costs = [ new Food(55), new Gold(55)];
}

export class FlemishMilitia extends UnitBase{
  strengths: string = "Strong vs skirmishers, cavalry, spearmen, camels and rams.";
  weaknesses: string = "Weak vs scorpions/mangonels and gunpowder.";
  name: any = "Flemish Militia";
  costs = [ new Food(60), new Gold(25)];
}

export class Serjeant extends UnitBase{
  strengths: string = "Can build donjons. Strong vs archers, infantry (with low melee armour), skirmishers, buildings, light cavalry and camels.";
  weaknesses: string = "Weak vs scorpions/mangonels, gunpowder, and monks.";
  name: any = "Serjeant";
  costs = [ new Food(60), new Gold(35)];
}