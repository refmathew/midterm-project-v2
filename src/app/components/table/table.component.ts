import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public inventory$;
  public amount = [1, 2, 3]

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe(inventory$ => { this.inventory$ = inventory$ 
    console.log(this.inventory$);
    })
  }
}
