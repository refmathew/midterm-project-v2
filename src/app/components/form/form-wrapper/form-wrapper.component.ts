import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {
  private name;
  private category;
  private price;
  public shouldClearField = new Subject<void>();
  public _invalidInput$ = new BehaviorSubject<Array<string>>([]);

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

  onInput(e) {
    this[e['name']] =  e['value'];
  }

  onButtonClick() {
    this.addItem(this.name, this.category, this.price);
  }

  addItem(name, category, price) {
    const item = {
      name: name,
      category: category,
      price: price
    }

    if (name && category && price) {
      this.inventoryService.addItem(item);

      this._invalidInput$.next([]);
      this.shouldClearField.next()
      this.clearValues();

    } else {
      let invalidProp: Array<string> = [];

      for (const prop in item) {
        if (!item[prop]) invalidProp.push(prop)
      }

      this._invalidInput$.next(invalidProp);
      this._invalidInput$.subscribe(r => console.log(r));
    }
  }

  clearValues() {
    this.name = undefined;
    this.category = undefined;
    this.price = undefined;
  }
}
