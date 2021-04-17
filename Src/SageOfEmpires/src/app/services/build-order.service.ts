import { Injectable, Output, EventEmitter } from '@angular/core';
import { IBuildOrder, ICiv } from '../model';
import { CobraCarDrushBuildOrder } from '../_data/build-orders/CobraCarDrushBuildOrder';
import { ScoutRushBuildOrder } from '../_data/build-orders/ScoutRushBuildOrder';
import { ArcherRushBuildOrder } from '../_data/build-orders/ArcherRushBuildOrder';
import { DrushFastCastleBuildOrder } from '../_data/build-orders/DrushFastCastleBuildOrder';

@Injectable({
  providedIn: 'root'
})
export class BuildOrderService {

  @Output() onBuildOrderSelected = new EventEmitter<IBuildOrder>();
  @Output() onStepSetAsDone = new EventEmitter<number>();

  selectedBuildOrder: IBuildOrder;
  lastTimeSetAsDone: number;

  public buildOrders: IBuildOrder[] = [
    new DrushFastCastleBuildOrder(),
    new ArcherRushBuildOrder(),
    new ScoutRushBuildOrder(),
    new CobraCarDrushBuildOrder()
  ];

  constructor() { }

  getRecommendedBuildOrders(civ: ICiv): IBuildOrder[] {
    return this.buildOrders.filter(bo => bo.name == civ.name);
  }

  setSelectedBuildOrder(buildOrder: IBuildOrder) {
    this.selectedBuildOrder = buildOrder;

    this.onBuildOrderSelected.emit(this.selectedBuildOrder);
  }

  setLastTimeSetAsDone(value: number) {
    this.lastTimeSetAsDone = value;
    this.onStepSetAsDone.emit(this.lastTimeSetAsDone);
  }
}