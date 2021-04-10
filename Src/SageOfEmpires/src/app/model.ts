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
}

export interface IUnit
{
    name: string;
    strengths: string;
    weaknesses: string;
}

export interface ITech
{
    name: string;
    details: string;
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

export class TeamColourOptions{
    public static array: PlayerColour[] = [
        new PlayerColour("Blue", PlayerColours.Blue),
        new PlayerColour("Red", PlayerColours.Red),
        new PlayerColour("Green", PlayerColours.Green),
        new PlayerColour("Yellow", PlayerColours.Yellow),
        new PlayerColour("Cyan", PlayerColours.Cyan),
        new PlayerColour("Pink", PlayerColours.Pink),
        new PlayerColour("Grey", PlayerColours.Grey),
        new PlayerColour("Orange", PlayerColours.Orange)
    ];
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
    readonly recommendedCivs?: ICiv[];
}

export class BuildOrderStep
{
    villagerCount?: string;
    idealTimeInSeconds?: number;
    details?: string;
    footnote?: string;
    imageUrl?: string;
}

export class GameSpeed {
    constructor(public name: string, public speed: number) {};
}

export enum GameSpeeds {
    None = 0,
    Slow = 1,
    Casual = 1.5,
    Normal = 1.7,
    Fast = 2
}

export class GameSpeedOptions{
    public static array: GameSpeed[] = [
        new GameSpeed("Slow", GameSpeeds.Slow),
        new GameSpeed("Casual", GameSpeeds.Casual),
        new GameSpeed("Normal", GameSpeeds.Normal),
        new GameSpeed("Fast", GameSpeeds.Fast),
    ];
}