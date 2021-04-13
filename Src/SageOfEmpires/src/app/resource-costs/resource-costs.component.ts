import { Component, OnInit, Input } from '@angular/core';
import { IResourceCost } from '../model';

@Component({
  selector: 'app-resource-costs',
  templateUrl: './resource-costs.component.html',
  styleUrls: ['./resource-costs.component.scss']
})
export class ResourceCostsComponent implements OnInit {

  @Input() costs: IResourceCost[];

  constructor() { }

  ngOnInit(): void {
  }

}
