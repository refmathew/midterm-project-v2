import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private _inventory = [
    {
      name: 'Kayak',
      category: 'Watersports',
      price: '275'
    },
    {
      name: 'Life Jacket',
      category: 'Watersports',
      price: '48.95'
    },
    {
      name: 'Soccer Ball',
      category: 'Soccer',
      price: '19.5'
    },
    {
      name: 'Thinking Cap',
      category: 'Chess',
      price: '16'
    },
  ];
  private _inventory$ = new BehaviorSubject(this._inventory);

  constructor() { }

  public addItem(item: {name, category, price}) {
    this._inventory.push(item)
    this._inventory$.next(this._inventory)
  }

  public getInventory(): Observable<Array<Object>> {
    return this._inventory$;
  }
}
