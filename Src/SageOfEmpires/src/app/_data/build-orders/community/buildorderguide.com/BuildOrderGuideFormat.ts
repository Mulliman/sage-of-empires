export interface BuildOrderGuide {
    author:       string;
    publisher:    string;
    build:        Build[];
    pop:          Pop;
    id:           number;
    image:        string;
    reference:    string;
    civilization: string;
    imageURL:     string;
    description:  string;
    status:       string;
    title:        string;
    uptime:       Uptime;
    difficulty:   number;
    attributes:   string[];
}

export interface Build {
    resources:  Resources;
    buildings?: Building[];
    type:       string;
    count?:     number | string;
    task?:      string;
    tech?:      string[];
    age?:       string;
    to?:        string;
    from?:      string;
    unit?:      string;
}

export interface Building {
    type:  string;
    count: number;
}

export interface Resources {
    gold:  number;
    food:  number;
    stone: number;
    build: number;
    wood:  number;
}

export interface Pop {
    castleAge: number;
    feudalAge: number;
}

export interface Uptime {
    feudalAge: string;
    castleAge: string;
}