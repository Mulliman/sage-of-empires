import { Injectable } from '@angular/core';
import { ICiv } from '../model';
import { Aztecs, Britons, Byzantines, Celts, Chinese, Franks, Goths, Japanese, Mongols, Persians, Saracens, Teutons, Turks, Vikings, Huns, Koreans, Mayans, Spanish, Incas, Indians, Italians, Magyars, Slavs, Berbers, Ethiopians, Malians, Portuguese, Burmese, Khmer, Malay, Vietnamese, Bulgarians, Cumans, Lithuanians, Tatars, Burgundians, Sicilians } from '../_data/civs';

@Injectable({
  providedIn: 'root'
})
export class CivService {

  public civs: Array<ICiv> = [
    new Aztecs(),
    new Berbers(),
    new Britons(),
    new Bulgarians(),
    new Burgundians(),
    new Burmese(),
    new Byzantines(),
    new Celts(),
    new Chinese(),
    new Cumans(),
    new Ethiopians(),
    new Franks(),
    new Goths(),
    new Huns(),
    new Incas(),
    new Indians(),
    new Italians(),
    new Japanese(),
    new Lithuanians(),
    new Khmer(),
    new Koreans(),
    new Magyars(),
    new Malians(),
    new Malay(),
    new Mayans(),
    new Mongols(),
    new Persians(),
    new Portuguese(),
    new Saracens(),
    new Sicilians(),
    new Slavs(),
    new Spanish(),
    new Tatars(),
    new Teutons(),
    new Turks(),
    new Vietnamese(),
    new Vikings(),
  ]

  constructor() { }

  public getCiv(input:string): ICiv{
      const name = input.toLowerCase();

      return this.civs.find(c => c.name.toLowerCase() == name);
  }

  public getCivIconPath(civ: ICiv): string{
    return "/assets/images/civs/CivIcon-" + civ.name + ".webp";
}

  public filterCivsByName(input:string): ICiv[]{
    if(!input){
      return this.civs;
    }

      const filterValue = input.toLowerCase();

      if(!filterValue){
        return this.civs;
      }
  
      return this.civs.filter(c => c.name.toLowerCase().includes(filterValue));
  }
}

