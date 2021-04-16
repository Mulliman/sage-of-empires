type Nullable<T> = T | null;

export interface ICiv
{
    readonly name: string;

    readonly armyType: string;

    readonly uniqueUnits: IUnit[];

    readonly castleTech: ITech;
    readonly imperialTech: ITech;

    readonly teamBonus: string;
    readonly civBonuses: string[];

    getIconPath();
}

export abstract class CivBase implements ICiv
{
   abstract name: string;    
   abstract armyType: string;
   abstract uniqueUnits: IUnit[];
   abstract castleTech: ITech;
   abstract imperialTech: ITech;
   abstract teamBonus: string;
   abstract civBonuses: string[];

   getIconPath () { return "/assets/images/civs/civicon-" + this.name.toLowerCase() + ".webp" };
} 

export interface IUnit
{
    name: string;
    strengths: string;
    weaknesses: string;
    costs?: IResourceCost[];
    availableAge?: Age;

    getIconPath();
}

export abstract class UnitBase implements IUnit{
    abstract name: string;
    abstract strengths: string;
    abstract weaknesses: string;
    costs?: IResourceCost[];
    availableAge?: Age;

    getIconPath () { return "/assets/images/units/" + this.name.replace(/ /g,"").toLowerCase() + "icon-de.webp" };
}

export enum Age {
    Dark = "dark",
    Feudal = "feudal",
    Castle = "castle",
    Imperial = "imperial"
}

export enum Resource {
    Wood = "w",
    Food = "f",
    Gold = "g",
    Stone = "s"
}

export interface IResourceCost {
    resource: Resource;
    cost: number;
}

export class Wood implements IResourceCost{
    resource: Resource;

    constructor(public cost: number){
        this.resource = Resource.Wood;
    }
}

export class Food implements IResourceCost{
    resource: Resource;

    constructor(public cost: number){
        this.resource = Resource.Food;
    }
}

export class Gold implements IResourceCost{
    resource: Resource;

    constructor(public cost: number){
        this.resource = Resource.Gold;
    }
}

export class Stone implements IResourceCost{
    resource: Resource;

    constructor(public cost: number){
        this.resource = Resource.Stone;
    }
}

export interface ITech
{
    name: string;
    details: string;
    costs?: IResourceCost[];
    availableAge?: Age;
}

export class PlayerColour {
    constructor(public colour: string, public id: number) {};
}

export enum PlayerColours {
    None = 0,
    Blue = 1,
    Red = 2,
    Green = 3,
    Yellow = 4,
    Cyan = 5,
    Pink = 6,
    Grey = 7,
    Orange = 8
}

export const PlayerColourConstants = {
    blue1: new PlayerColour("Blue", PlayerColours.Blue),
    red2: new PlayerColour("Red", PlayerColours.Red),
    green3: new PlayerColour("Green", PlayerColours.Green),
    yellow4: new PlayerColour("Yellow", PlayerColours.Yellow),
    cyan5: new PlayerColour("Cyan", PlayerColours.Cyan),
    pink6: new PlayerColour("Pink", PlayerColours.Pink),
    grey7: new PlayerColour("Grey", PlayerColours.Grey),
    orange8: new PlayerColour("Orange", PlayerColours.Orange),
}

export const TeamColourOptions = {
    array: [
        PlayerColourConstants.blue1, 
        PlayerColourConstants.red2, 
        PlayerColourConstants.green3,
        PlayerColourConstants.yellow4,
        PlayerColourConstants.cyan5,
        PlayerColourConstants.pink6,
        PlayerColourConstants.grey7,
        PlayerColourConstants.orange8
    ]
}

export class Player
{
    constructor(public civ: ICiv) {}

    playerColour?: PlayerColour;
    team?: number;

    getColour() : string {
        
        if(!this.playerColour){
            return "none";
        }

        return this.playerColour.colour;

        // var name = PlayerColours[this.number];

        // return name;
    }
}

export class Opponent extends Player
{
}

export interface IBuildOrder
{
    readonly name: string;
    readonly steps: BuildOrderStep[];
    readonly finalTips?: string;
    readonly hideOnYourOwn?: boolean;
    readonly recommendedCivs?: ICiv[];
}

export class BuildOrderStep
{
    villagerCount?: string;
    idealTimeInSeconds?: number;
    details?: string;
    footnotes?: string[];
    imageUrl?: string;
    isAgeUp?: boolean;
}

export class GameSpeed {
    constructor(public name: string, public speed: number) {};
}

export enum GameSpeeds {
    None = 0,
    Slow = 1,
    Casual = 1.5,
    Normal = 1.7,
    Fast = 2,
    Demo = 5
}

export class GameSpeedOptions{
    public static array: GameSpeed[] = [
        new GameSpeed("Slow", GameSpeeds.Slow),
        new GameSpeed("Casual", GameSpeeds.Casual),
        new GameSpeed("Normal", GameSpeeds.Normal),
        new GameSpeed("Fast", GameSpeeds.Fast),
        new GameSpeed("Demo", GameSpeeds.Demo),
    ];
}