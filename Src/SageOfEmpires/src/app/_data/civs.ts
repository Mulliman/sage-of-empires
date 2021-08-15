import { ICiv, IUnit, ITech, CivBase, Food, Gold, Wood, Stone } from '../model';
import { Longbowman, JaguarWarrior, Cataphract, WoadRaider, ChuKoNu, ThrowingAxeman, Huskarl, Samurai, Mangudai, WarElephant, Mameluke, TeutonicKnight, Janissary, Longboat, Berserk, Tarkan, WarWagon, TurtleShip, PlumedArcher, Conquistador, Missionary, Kamayuk, Slinger, ElephantArcher, ImperialCamelRider, GenoeseCrossbowman, Condottiero, MagyarHuszar, Boyar, CamelArcher, Genitour, ShotelWarrior, Gbeto, OrganGun, Caravel, Arambai, BallistaElephant, KarambitWarrior, RattanArcher, ImperialSkirmisher, Konnik, Kipchak, Leitis, Keshik, FlamingCamel, Coustillier, FlemishMilitia, Serjeant, HussiteWagon, Houfnice, Obuch, WingedHussar } from './units';

export class Aztecs extends CivBase {
    armyType = "Infantry and Monk";
    uniqueUnits = [ new JaguarWarrior() ];
    castleTech = { name: "Atlatl", details: "Gives Skirmishers +1 attack and range.", costs: [ new Food(400), new Gold(350) ] };
    imperialTech = { name: "Garland Wars", details: "Gives infantry +4 attack.", costs: [ new Food(450), new Gold(750) ] };
    teamBonus = "Relics generate +33% gold.";
    civBonuses = [
        "Villagers carry +3 extra resources.",
        "All military units are created 11% faster.",
        "Monks gain 5 HP for every researched Monastery technology.",
        "Start with +50 gold."
    ];
    name: any = "Aztecs";
}

export class Berbers extends CivBase {
    armyType = "Navy and cavalry";
    uniqueUnits = [ new CamelArcher(), new Genitour() ];
    castleTech = { name: "Kasbah", details: "Team Castles work +25% faster.", costs: [ new Food(250), new Gold(250) ] };
    imperialTech = { name: "Maghrebi Camels", details: "Camel troops regenerate.", costs: [ new Food(700), new Gold(300) ] };
    teamBonus = "Genitour are available at the Archery Range.";
    civBonuses = [
        "Villagers move +10% faster.",
        "Stable units are 15%/20% cheaper in the Castle/Imperial Age.",
        "Ships move +10% faster."
    ];
    name: any = "Berbers";
}

export class Bohemians extends CivBase {
    armyType = "Gunpowder and monks";
    uniqueUnits = [ new HussiteWagon(), new Houfnice() ];
    castleTech = { name: "Wagenburg Tactics", details: "Gunpowder units move 15% faster", costs: [ new Food(300), new Gold(300) ] };
    imperialTech = { name: "Hussite Reforms", details: "Monks and Monastery upgrades have their gold cost replaced by food", costs: [ new Food(800), new Gold(450) ] };
    teamBonus = "Markets work 80% faster.";
    civBonuses = [
        "Blacksmiths, Monasteries and Universities cost -100 wood.",
        "Chemistry and Hand Cannoneer available in the Castle Age.",
        "The Spearman line deals +25% bonus damage.",
        "Fervor and Sanctity affect Villagers.",
        "Mining Camp technologies free."
    ];
    name: any = "Bohemians";
}

export class Britons extends CivBase {
    armyType = "Archer";
    uniqueUnits = [ new Longbowman() ];
    castleTech = { name: "Yeomen", details: "Gives foot archers +1 range and towers +2 attack.", costs: [ new Wood(750), new Gold(450) ] };
    imperialTech = { name: "Warwolf", details: "Gives Trebuchets blast damage and 100% accuracy against units.", costs: [ new Wood(800), new Gold(400) ] };
    teamBonus = "Archery Ranges work 20% faster.";
    civBonuses = [
        "Town Centers cost -50% wood starting in the Castle Age.",
        "Foot archers (except Skirmishers) have +1/+2 range in the Castle/Imperial Age.",
        "Shepherds work 25% faster."
    ];
    name: any = "Britons";
}

export class Bulgarians extends CivBase {
    armyType = "Infantry and Cavalry";
    uniqueUnits = [ new Konnik() ];
    castleTech = { name: "Stirrups", details: "Light Cavalry, Knight line and Konniks attack 33% faster.", costs: [ new Food(400), new Gold(200) ] };
    imperialTech = { name: "Bagains", details: "Militia line +5 melee armor.", costs: [ new Food(900), new Gold(450) ] };
    teamBonus = "Blacksmiths work 80% faster.";
    civBonuses = [
        "Militia-line upgrades free.",
        "Town Centers cost -50% stone.",
        "Can build Krepost.",
        "Blacksmith and Siege Workshop upgrades cost -50% food."
    ];
    name: any = "Bulgarians";
}

export class Burgundians extends CivBase {
    armyType = "Cavalry";
    uniqueUnits = [ new Coustillier(), new FlemishMilitia() ];
    castleTech = { name: "Burgundian Vineyards", details: "Convert all food into gold at a 2:1 ratio; farmers slowly generate gold in addition to food at a rate of 1 gold per farmer per minute.", costs: [ new Food(400), new Gold(300) ] };
    imperialTech = { name: "Flemish Revolution", details: "Upgrades all existing villagers to flemish militia, lets the player train flemish militia at the Town Center.", costs: [ new Food(800), new Gold(450) ] };
    teamBonus = "Relics generate both Gold and Food.";
    civBonuses = [
        "Economic upgrades are available one Age earlier than other civilizations.",
        "Stable technologies are 50% cheaper",
        "Cavalier upgrade available in the Castle Age.",
        "Gunpowder units gain a +25% bonus to their attack"
    ];
    name: any = "Burgundians";
}

export class Burmese extends CivBase {
    armyType = "Monks and elephants";
    uniqueUnits = [ new Arambai() ];
    castleTech = { name: "Howdah", details: "Battle Elephants +1/+1 armor.", costs: [ new Food(400), new Wood(300) ] };
    imperialTech = { name: "Manipur Cavalry", details: "Cavalry and Arambai +6 attack against standard buildings.", costs: [ new Food(650), new Gold(400) ] };
    teamBonus = "Relics are visible on the map from the game start.";
    civBonuses = [
        "Lumber Camp technologies are free.",
        "Infantry has +1/+2/+3 attack in the Feudal/Castle/Imperial Age.",
        "Monastery technologies are 50% cheaper."
    ];
    name: any = "Burmese";
}

export class Byzantines extends CivBase {
    armyType = "Defense";
    uniqueUnits = [ new Cataphract() ];
    castleTech = { name: "Greek Fire", details: "Fire Ships +1 range.", costs: [ new Food(250), new Gold(300) ] };
    imperialTech = { name: "Logistica", details: "Cataphracts deal trample damage.", costs: [ new Food(800), new Gold(600) ] };
    teamBonus = "Monks heal 50% faster.";
    civBonuses = [
        "Buildings have +10%/+20%/+30%/+40% HP in the Dark/Feudal/Castle/Imperial Age.",
        "Camel Riders, Skirmishers, and the Spearman lines are 25% cheaper.",
        "Fire Ships attack 25% faster.",
        "Advancing to the Imperial Age is 33% cheaper.",
        "Town Watch is free."
    ];
    name: any = "Byzantines";
}

export class Celts extends CivBase {
    armyType = "Infantry and siege";
    uniqueUnits = [ new WoadRaider() ];
    castleTech = { name: "Stronghold", details: "Castles and towers fire 25% faster.", costs: [ new Food(250), new Gold(200) ] };
    imperialTech = { name: "Furor Celtica", details: "Siege Workshop units have +40% HP.", costs: [ new Food(750), new Gold(450) ] };
    teamBonus = "Siege Workshops work 20% faster.";
    civBonuses = [
        "Infantry units move 15% faster starting in the Feudal Age.",
        "Lumberjacks work 15% faster.",
        "Siege weapons fire +25% faster.",
        "Enemy herdables can be converted regardless of enemy units next to them."
    ];
    name: any = "Celts";
}

export class Chinese extends CivBase {
    armyType = "Archer";
    uniqueUnits = [ new ChuKoNu() ];
    castleTech = { name: "Great Wall", details: "Walls and towers +30% HP.", costs: [ new Wood(400), new Stone(200) ] };
    imperialTech = { name: "Rocketry", details: "Chu Ko Nu +2, Scorpions +4 attack.", costs: [ new Wood(600), new Gold(600) ] };
    teamBonus = "Farms start with +45 food.";
    civBonuses = [
        "Start game with three extra Villagers, but with -200 food and -50 wood.",
        "Town Center supports ten population (instead of five) and have +5 LOS.",
        "Technologies are 10%/15%/20% cheaper in the Feudal/Castle/Imperial Age.",
        "Demolition Ships have +50% HP."
    ];
    name: any = "Chinese";
}

export class Cumans extends CivBase {
    armyType = "Cavalry";
    uniqueUnits = [ new Kipchak() ];
    castleTech = { name: "Steppe Husbandry", details: "Scout Cavalry line, Steppe Lancers and Cavalry Archers are trained 50% faster.", costs: [ new Food(200), new Wood(300) ] };
    imperialTech = { name: "Cuman Mercenaries", details: "Team members can create 10 free Elite Kipchaks at the Castle.", costs: [ new Food(650), new Gold(400) ] };
    teamBonus = "Palisade Walls have +50% hit points.";
    civBonuses = [
        "Additional Town Center can be built in the Feudal Age.",
        "Siege Workshops and Battering Ram/Capped Ram available in the Feudal/Castle Age.",
        "Cavalry move 5%/10%/15% faster in the Feudal/Castle/Imperial Age.",
    ];
    name: any = "Cumans";
}

export class Ethiopians extends CivBase {
    armyType = "Archer and siege";
    uniqueUnits = [ new ShotelWarrior() ];
    castleTech = { name: "Royal Heirs", details: "Halves Shotel Warrior training time.", costs: [ new Food(300), new Gold(300) ] };
    imperialTech = { name: "Torsion Engines", details: "Siege Workshop units' blast radius increased.", costs: [ new Food(1000), new Gold(600) ] };
    teamBonus = "Towers and Outposts have +3 Line of Sight.";
    civBonuses = [
        "Archers fire +18% faster.",
        "Receive +100 food and +100 gold whenever a new Age is reached.",
        "The Pikeman upgrade is free.",
    ];
    name: any = "Ethiopians";
}


export class Franks extends CivBase {
    armyType = "Cavalry";
    uniqueUnits = [ new ThrowingAxeman() ];
    castleTech = { name: "Chivalry", details: "Stables work 40% faster.", costs: [ new Wood(400), new Gold(400) ] };
    imperialTech = { name: "Bearded Axe", details: "Throwing Axeman +1 range.", costs: [ new Food(400), new Gold(400) ] };
    teamBonus = "Knights have +2 Line of Sight.";
    civBonuses = [
        "Farm upgrades are free.",
        "Castles are 25% cheaper.",
        "Mounted units have +20% HP (starting in the Feudal Age).",
        "Foragers work 15% faster."
    ];
    name: any = "Franks";
}

export class Goths extends CivBase {
    armyType = "Infantry";
    uniqueUnits = [ new Huskarl() ];
    castleTech = { name: "Anarchy", details: "Huskarls can be created at Barracks.", costs: [ new Food(450), new Gold(250) ] };
    imperialTech = { name: "Perfusion", details: "Barracks work 100% faster.", costs: [ new Wood(400), new Gold(600) ] };
    teamBonus = "Barracks work 20% faster.";
    civBonuses = [
        "Infantry are 20%/25%/30%/35% cheaper in the Dark/Feudal/Castle/Imperial Age.",
        "Infantry have +1/+2/+3 attack bonus against standard buildings in the Feudal/Castle/Imperial Age.",
        "Villagers have +5 attack against aggressive huntables (Wild Boar, Javelina, Elephant, Rhinoceros) and carry +15 food from hunting.",
        "+10 population cap in the Imperial Age.",
        "Loom can be researched instantly."
    ];
    name: any = "Goths";
}

export class Huns extends CivBase {
    armyType = "Cavalry";
    uniqueUnits = [ new Tarkan() ];
    castleTech = { name: "Marauders", details: "Create Tarkans at Stables.", costs: [ new Wood(300), new Gold(200) ] };
    imperialTech = { name: "Atheism", details: "+100 years for Relic/Wonder victories; enemy Relic gold generation reduced by 50%", costs: [ new Food(500), new Gold(500) ] };
    teamBonus = "Stables work 20% faster.";
    civBonuses = [
        "Start the game with -100 wood, but with the population cap at the maximum.",
        "Cavalry Archers are 10%/20% cheaper in the Castle/Imperial Age.",
        "Trebuchets have +30% accuracy (actual bonus is +35%)."
    ];
    name: any = "Huns";
}

export class Incas extends CivBase {
    armyType = "Infantry";
    uniqueUnits = [ new Kamayuk(), new Slinger() ];
    castleTech = { name: "Andean Sling", details: "Slingers and Skirmishers have no minimum range.", costs: [ new Food(200), new Gold(300) ] };
    imperialTech = { name: "Fabric Shields", details: "Kamayuks, Slingers, and Eagle Warriors +1/+2 armor.", costs: [ new Food(600), new Gold(600) ] };
    teamBonus = "Farms are built 100% faster.";
    civBonuses = [
        "Start the game with an Eagle Scout.",
        "Start with a free Llama.",
        "Villagers benefit from Blacksmith infantry upgrades.",
        "Houses support 10 population.",
        "Buildings cost -15% stone."
    ];
    name: any = "Incas";
}

export class Indians extends CivBase {
    armyType = "Camel and gunpowder";
    uniqueUnits = [ new ElephantArcher(), new ImperialCamelRider() ];
    castleTech = { name: "Sultans", details: "All gold production +10% faster.", costs: [ new Food(400), new Wood(400) ] };
    imperialTech = { name: "Shatagni", details: "Hand Cannoneers +1 range.", costs: [ new Food(500), new Gold(300) ] };
    teamBonus = "Camel units have +4 attack against standard buildings.";
    civBonuses = [
        "Fishermen work 10% faster.",
        "Villagers are 10%/15%/20%/25% cheaper in the Dark/Feudal/Castle/Imperial Age.",
        "Stable units have +1 pierce armor in the Castle Age and +1 pierce armor in the Imperial Age."
    ];
    name: any = "Indians";
}

export class Italians extends CivBase {
    armyType = "Navy and archers";
    uniqueUnits = [ new GenoeseCrossbowman(), new Condottiero() ];
    castleTech = { name: "Pavise", details: "Foot archers (except Skirmishers) and Condottieri +1/+1 armor.", costs: [ new Food(300), new Gold(150) ] };
    imperialTech = { name: "Silk Road", details: "Trade units cost -50%.", costs: [ new Food(500), new Gold(250) ] };
    teamBonus = "Condottieri are available at the Barracks.";
    civBonuses = [
        "Advancing to the next Age is 15% cheaper.",
        "Dock and University technologies are 33% cheaper.",
        "Fishing Ships are 15% cheaper.",
        "Gunpowder units are 20% cheaper."
    ];
    name: any = "Italians";
}

export class Japanese extends CivBase {
    armyType = "Infantry";
    uniqueUnits = [ new Samurai() ];
    castleTech = { name: "Yasama", details: "Towers fire extra arrows.", costs: [ new Food(300), new Wood(300) ] };
    imperialTech = { name: "Kataparuto", details: "Trebuchets fire and pack faster.", costs: [ new Wood(750), new Gold(400) ] };
    teamBonus = "Galleys have a +50% longer Line of Sight.";
    civBonuses = [
        "Fishing Ships have double HP, +2 pierce armor, and work 5%/10%/15%/20% faster in the Dark/Feudal/Castle/Imperial Age.",
        "Mills, Lumber Camps and Mining Camps are 50% cheaper.",
        "Infantry attack 33% faster starting in the Feudal Age."
    ];
    name: any = "Japanese";
}

export class Khmer extends CivBase {
    armyType = "Siege and elephant";
    uniqueUnits = [ new BallistaElephant() ];
    castleTech = { name: "Tusk Swords", details: "Battle Elephants +3 attack.", costs: [ new Wood(300), new Gold(450) ] };
    imperialTech = { name: "Double Crossbow", details: "Ballista Elephants and Scorpions shoot two projectiles.", costs: [ new Food(700), new Gold(400) ] };
    teamBonus = "Scorpions have +1 range.";
    civBonuses = [
        "No buildings are required to construct certain buildings or advance in Age.",
        "Battle Elephants move +10% faster.",
        "Khmer Villagers drop off food from farms (1 unit at a time) without needing a drop site.",
        "Villagers can garrison in Houses."
    ];
    name: any = "Khmer";
}

export class Koreans extends CivBase {
    armyType = "Towers and navy";
    uniqueUnits = [ new WarWagon(), new TurtleShip() ];
    castleTech = { name: "Eupseong", details: "Watch Towers, Guard Towers, and Keeps +2 range.", costs: [ new Food(300), new Wood(300) ] };
    imperialTech = { name: "Shinkichon", details: "+1 range for Mangonels.", costs: [ new Wood(800), new Gold(500) ] };
    teamBonus = "Mangonel line minimum range reduced.";
    civBonuses = [
        "Villagers have +3 Line of Sight.",
        "Stone Miners work 20% faster.",
        "Tower upgrades are free (Bombard Tower requires Chemistry).",
        "Archer armor upgrades are free.",
        "Military units cost -20% less wood (except siege weapons)."
    ];
    name: any = "Koreans";
}

export class Lithuanians extends CivBase {
    armyType = "Cavalry and monks";
    uniqueUnits = [ new Leitis(), new WingedHussar() ];
    castleTech = { name: "Hill Forts", details: "Town Centers +3 range.", costs: [ new Food(250), new Gold(250) ] };
    imperialTech = { name: "Tower Shields", details: "Spearman line and Skirmishers +2 pierce armor.", costs: [ new Food(500), new Gold(200) ] };
    teamBonus = "Monastery works 20% faster.";
    civBonuses = [
        "Start with +150 food.",
        "Spearman-line and Skirmishers move 10% faster.",
        "Each garrisoned Relic gives +1 attack to Knights and Leitis (maximum +4)."
    ];
    name: any = "Lithuanians";
}

export class Magyars extends CivBase {
    armyType = "Cavalry";
    uniqueUnits = [ new MagyarHuszar() ];
    castleTech = { name: "Corvinian Army", details: "Magyar Huszars cost no gold.", costs: [ new Food(200), new Gold(300) ] };
    imperialTech = { name: "Recurve Bow", details: "Cavalry Archers + 1 range and attack.", costs: [ new Wood(600), new Gold(400) ] };
    teamBonus = "Foot archers have +2 Line of Sight.";
    civBonuses = [
        "Forging, Iron Casting, and Blast Furnace are free.",
        "Scout Cavalry line is 15% cheaper.",
        "Villagers kill wild animals in one strike."
    ];
    name: any = "Magyars";
}

export class Malay extends CivBase {
    armyType = "Navy";
    uniqueUnits = [ new KarambitWarrior() ];
    castleTech = { name: "Thalassocracy", details: "Upgrades Docks to Harbors, which shoot arrows.", costs: [ new Food(300), new Gold(300) ] };
    imperialTech = { name: "Forced Levy", details: "Turns Militia line gold cost to food cost.", costs: [ new Food(850), new Gold(500) ] };
    teamBonus = "Docks have double Line of Sight.";
    civBonuses = [
        "Advancing in Age is 66% faster.",
        "Fish Traps are 33% cheaper.",
        "Fish Traps provide unlimited food.",
        "Battle Elephants are 30% cheaper."
    ];
    name: any = "Malay";
}

export class Malians extends CivBase {
    armyType = "Infantry";
    uniqueUnits = [ new Gbeto() ];
    castleTech = { name: "Tigui", details: "Town Centers fire arrows even without garrison.", costs: [ new Food(200), new Wood(300) ] };
    imperialTech = { name: "Farimba", details: "Stable units +5 attack.", costs: [ new Food(650), new Gold(400) ] };
    teamBonus = "Universities research +80% faster.";
    civBonuses = [
        "Buildings cost -15% wood (except Farms).",
        "Barracks units have +1/+2/+3 pierce armor in the Feudal/Castle/Imperial Age.",
        "Gold Mining is free."
    ];
    name: any = "Malians";
}

export class Mayans extends CivBase {
    armyType = "Archer";
    uniqueUnits = [ new PlumedArcher() ];
    castleTech = { name: "Hul'che Javelineers", details: "Improves Skirmishers by making them throw a second projectile.", costs: [ new Food(300), new Gold(300) ] };
    imperialTech = { name: "El Dorado", details: "+40 hit points for Eagle Warriors.", costs: [ new Food(750), new Gold(450) ] };
    teamBonus = "Walls are 50% cheaper.";
    civBonuses = [
        "Start the game with an Eagle Scout.",
        "Start the game with +1 Villager, but with -50 food.",
        "Resources last 15% longer.",
        "Foot archers are 10%/20%/30% cheaper in the Feudal/Castle/Imperial Age."
    ];
    name: any = "Mayans";
}

export class Mongols extends CivBase {
    armyType = "Cavalry archer";
    uniqueUnits = [ new Mangudai() ];
    castleTech = { name: "Nomads", details: "Houses retain population when destroyed.", costs: [ new Wood(300), new Gold(150) ] };
    imperialTech = { name: "Drill", details: "Siege Workshop units move +50% faster.", costs: [ new Food(500), new Gold(450) ] };
    teamBonus = "The Scout Cavalry line has +2 Line of Sight.";
    civBonuses = [
        "Cavalry archers fire 25% faster.",
        "Light Cavalry, Hussars, and Steppe Lancers have +30% HP.",
        "Hunters work +40% faster."
    ];
    name: any = "Mongols";
}

export class Persians extends CivBase {
    armyType = "Cavalry";
    uniqueUnits = [ new WarElephant() ];
    castleTech = { name: "Kamandaran", details: "Turns Archer gold cost into wood cost.", costs: [ new Food(400), new Gold(300) ] };
    imperialTech = { name: "Mahouts", details: "War Elephants move +30% faster.", costs: [ new Food(300), new Gold(300) ] };
    teamBonus = "Knights have +2 attack against archers.";
    civBonuses = [
        "Start game with +50 food and +50 wood.",
        "Town Centers and Docks have double HP and work 10%/15%/20% faster in the Feudal/Castle/Imperial Age."
    ];
    name: any = "Persians";
}

export class Poles extends CivBase {
    armyType = "Cavalry";
    uniqueUnits = [ new Obuch(), new WingedHussar() ];
    castleTech = { name: "Szlachta Privileges", details: "Knight line costs -60% gold.", costs: [ new Food(500), new Gold(300) ] };
    imperialTech = { name: "Lechitic Legacy", details: "Scout Cavalry line deals trample damage.", costs: [ new Food(750), new Gold(550) ] };
    teamBonus = "Scout Cavalry, Light Cavalry, Hussar, and Winged Hussar +1 attack vs. archers.";
    civBonuses = [
        "Villagers recover 5 HPs per minute in the Dark Age, 10 in the Feudal Age, 15 in the Castle Age, and 20 in the Imperial Age",
        "The Folwark replaces the Mill",
        "Stone miners generate gold in addition to stone"
    ];
    name: any = "Poles";
}

export class Portuguese extends CivBase {
    armyType = "Navy and gunpowder";
    uniqueUnits = [ new OrganGun(), new Caravel() ];
    castleTech = { name: "Carrack", details: "Ships +1/+1 armor.", costs: [ new Wood(200), new Gold(300) ] };
    imperialTech = { name: "Arquebus", details: "Gunpowder units fire more accurately at moving targets.", costs: [ new Food(700), new Gold(400) ] };
    teamBonus = "The Line of Sight is shared with the team from the beginning of the game.";
    civBonuses = [
        "All units cost -20% gold.",
        "All ships have +10% HP.",
        "All technologies are researched 30% faster.",
        "The Feitoria becomes available for building in the Imperial Age.",
    ];
    name: any = "Portuguese";
}

export class Saracens extends CivBase {
    armyType = "Cavalry and navy";
    uniqueUnits = [ new Mameluke() ];
    castleTech = { name: "Madrasah", details: "33% of a Monk's gold cost are returned if the Monk gets killed.", costs: [ new Food(200), new Gold(100) ] };
    imperialTech = { name: "Zealotry", details: "Camel Riders and Mamelukes +20 hit points.", costs: [ new Food(500), new Gold(450) ] };
    teamBonus = "Foot archers have +2 attack against standard buildings.";
    civBonuses = [
        "The commodity trading fee is 5%.",
        "Markets cost -100 wood.",
        "Transport Ships have double HP and +5 carry capacity.",
        "Galleys attack 25% faster.",
        "Camel units +10 hit points."
    ];
    name: any = "Saracens";
}

export class Sicilians extends CivBase {
    armyType = "Infantry";
    uniqueUnits = [ new Serjeant() ];
    castleTech = { name: "First Crusade", details: "Each Town Center (up to a max of 5) spawns a one-time group of 7 Serjeants.", costs: [ new Food(300), new Gold(600) ] };
    imperialTech = { name: "Scutage", details: "Each team member receives a one-time payment of 15 gold for each military unit that they own.", costs: [ new Food(500), new Gold(400) ] };
    teamBonus = "Transport ships +5 carry capacity and +10 armor versus anti-ship bonus damage.";
    civBonuses = [
        "Castles and Town Centers are constructed 100% faster.",
        "Land military units (with the exception of Siege weapons) absorb 50% of all incoming bonus damage.",
        "Farm upgrades provide +100% additional food to Farms before they need to be reseeded",
        "Can build Donjons from the Feudal Age on, which replace the Watch Tower line."
    ];
    name: any = "Sicilians";
}

export class Slavs extends CivBase {
    armyType = "Infantry and siege";
    uniqueUnits = [ new Boyar() ];
    castleTech = { name: "Orthodoxy", details: "+3/+3 armor for Monks.", costs: [ new Food(200), new Gold(300) ] };
    imperialTech = { name: "Druzhina", details: "infantry damage adjacent units.", costs: [ new Food(1200), new Gold(500) ] };
    teamBonus = "Military buildings (excluding Castles and Docks) provide +5 population.";
    civBonuses = [
        "Farmers work 10% faster.",
        "Supplies is free.",
        "Siege Workshop units are 15% cheaper."
    ];
    name: any = "Slavs";
}

export class Spanish extends CivBase {
    armyType = "Monk and gunpowder";
    uniqueUnits = [ new Conquistador(), new Missionary() ];
    castleTech = { name: "Inquisition", details: "Conversion rate improved.", costs: [ new Food(100), new Gold(300) ] };
    imperialTech = { name: "Supremacy", details: "+6 attack, +2 armor and pierce armor, and +40 hit points for Villagers.", costs: [ new Food(450), new Gold(250) ] };
    teamBonus = "Trade units generate +25% gold.";
    civBonuses = [
        "Builders work 30% faster.",
        "Blacksmith upgrades cost no gold.",
        "Cannon Galleons have better accuracy and faster cannonballs.",
        "Hand Cannoneers and Bombard Cannons fire 18% faster."
    ];
    name: any = "Spanish";
}

export class Tatars extends CivBase {
    armyType = "Cavalry archer";
    uniqueUnits = [ new Keshik(), new FlamingCamel() ];
    castleTech = { name: "Silk Armor", details: "Scout Cavalry line, Steppe Lancers and Cavalry Archers have +1 melee armor and +1 pierce armor.", costs: [ new Wood(400), new Gold(300) ] };
    imperialTech = { name: "Timurid Siegecraft", details: "Trebuchets +2 range, enables Flaming Camels at the Castle.", costs: [ new Wood(400), new Gold(500) ] };
    teamBonus = "Cavalry Archers +2 LOS.";
    civBonuses = [
        "Herdables contain +50% food.",
        "New Town Centers spawn two Sheep starting in the Castle Age.",
        "Units deal +25% damage when attacking from hills (stacks with the regular hill attack bonus).",
        "Thumb Ring is free.",
        "Parthian Tactics is free."
    ];
    name: any = "Tatars";
}

export class Teutons extends CivBase {
    armyType = "Infantry";
    uniqueUnits = [ new TeutonicKnight() ];
    castleTech = { name: "Ironclad", details: "Siege weapons +4 melee armor.", costs: [ new Wood(400), new Gold(350) ] };
    imperialTech = { name: "Crenellations", details: "Castles +3 range; garrisoned infantry fires arrows.", costs: [ new Food(600), new Stone(450) ] };
    teamBonus = "Units resist conversion.";
    civBonuses = [
        "Monks have double healing range.",
        "Towers garrison twice as many units.",
        "Murder Holes and Herbal Medicine are free.",
        "Farms are 40% cheaper.",
        "Town Centers can garrison +10 units.",
        "Barracks and Stable units receive +1/+2 melee armor in the Castle/Imperial Age."
    ];
    name: any = "Teutons";
}

export class Turks extends CivBase {
    armyType = "Gunpowder";
    uniqueUnits = [ new Janissary() ];
    castleTech = { name: "Sipahi", details: "Cavalry Archer units +20 hit points.", costs: [ new Food(350), new Gold(150) ] };
    imperialTech = { name: "Artillery", details: "+2 range for Bombard Towers, Bombard Cannons, Cannon Galleons.", costs: [ new Gold(500), new Stone(450) ] };
    teamBonus = "Gunpowder units are created 25% faster.";
    civBonuses = [
        "Gunpowder units have +25% HP.",
        "Gunpowder technologies are 50% cheaper.",
        "Chemistry is free.",
        "Gold Miners work 20% faster.",
        "Light Cavalry and Hussar upgrades are free.",
        "Scout Cavalry line gain +1 pierce armor."
    ];
    name: any = "Turks";
}

export class Vietnamese extends CivBase {
    armyType = "Archers";
    uniqueUnits = [ new RattanArcher(), new ImperialSkirmisher() ];
    castleTech = { name: "Chatras", details: "Battle Elephants +50 hit points.", costs: [ new Food(250), new Gold(250)] };
    imperialTech = { name: "Paper Money", details: "Tributes 500 gold to each ally.", costs: [ new Food(500), new Wood(300) ] };
    teamBonus = "Imperial Skirmishers are available at the Archery Range.";
    civBonuses = [
        "Reveal enemy positions at game start.",
        "Economic upgrades cost no wood.",
        "Archery Range units have +20% HP.",
        "Conscription is free."
    ];
    name: any = "Vietnamese";
}

export class Vikings extends CivBase {
    armyType = "Infantry and navy";
    uniqueUnits = [ new Berserk(), new Longboat() ];
    castleTech = { name: "Chieftains", details: "Infantry get attack bonus against cavalry.", costs: [ new Food(700), new Gold(500) ] };
    imperialTech = { name: "Berserkergang", details: "Berserks regenerate faster.", costs: [ new Food(850), new Gold(400) ] };
    teamBonus = "Docks are 15% cheaper.";
    civBonuses = [
        "Warships are 15%/15%/20% cheaper in the Feudal/Castle/Imperial Age.",
        "Infantry have +10%/+15%/+20% HP in the Feudal/Castle/Imperial Age.",
        "Wheelbarrow and Hand Cart are free."
    ];
    name: any = "Vikings";
}