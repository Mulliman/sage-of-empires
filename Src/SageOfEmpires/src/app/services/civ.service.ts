import { Injectable } from '@angular/core';
import { ICiv } from '../model';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Aztecs, Britons } from '../civs';

@Injectable({
  providedIn: 'root'
})
export class CivService {

  public civs: Array<ICiv> = [
    new Aztecs(),
    new Britons()
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

