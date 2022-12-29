import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/service/inventory.service';
import { TogglerService } from 'src/app/services/toggler.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public inventory$;
  public shouldShow$: boolean = true;

  constructor(
    private inventoryService: InventoryService,
    private togglerService: TogglerService
  ) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe(inventory$ => this.inventory$ = inventory$)
    this.togglerService.getVisibility().subscribe(shown$ => this.shouldShow$ = shown$);
  }
}