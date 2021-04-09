import { Injectable } from '@angular/core';
import { Civ } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CivService {

  public civs: Array<Civ> = [
    { name: "Aztecs"},
    { name: "Berbers"},
    { name: "Britons"},
    { name: "Byzantines"},
  ]

  constructor() { }

  public getCiv(input:string): Civ{
      const name = input.toLowerCase();

      return this.civs.find(c => c.name.toLowerCase() == name);
  }

  public filterCivsByName(input:string): Civ[]{
      const filterValue = input.toLowerCase();
  
      return this.civs.filter(c => c.name.toLowerCase().includes(filterValue));
  }
}