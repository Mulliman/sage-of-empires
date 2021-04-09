type Nullable<T> = T | null;

export class Civ
{
    name;
}

export class Player
{
    constructor(public civ: Civ) {}

    number?: number;
    team?: Nullable<number>;
}

export class Opponent extends Player
{
}

