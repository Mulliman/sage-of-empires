import { Injectable } from '@angular/core';
import { ICiv } from '../model';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CivService {

  public civs: Array<ICiv> = [
    new Aztecs(),
    new Berbers(),
    new Britons(),
    new Byzantines()
  ]

  constructor() { }

  public getCiv(input:string): ICiv{
      const name = input.toLowerCase();

      return this.civs.find(c => c.name.toLowerCase() == name);
  }

  public filterCivsByName(input:string): ICiv[]{
      const filterValue = input.toLowerCase();
  
      return this.civs.filter(c => c.name.toLowerCase().includes(filterValue));
  }
}

export class Aztecs implements ICiv{
  name: any = "Aztecs";

}

export class Berbers implements ICiv{
  name: any = "Berbers";

}

export class Britons implements ICiv{
  name: any = "Britons";

}

export class Byzantines implements ICiv{
  name: any = "Byzantines";

}