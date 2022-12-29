import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  private _type: string;
  private _name: string;
  public _invalidInput;
  public value;

  @Input()
  set type(type: string) { this._type = type };
  get type(): string { return this._type };
  @Input()
  set name(name: string) { this._name = name };
  get name(): string { return this._name };
  @Input() shouldClearField: Observable<void>;
  @Input() _invalidInput$: Observable<Array<string>>;

  @Output() input = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.shouldClearField.subscribe(() => this.clearField())
    this._invalidInput$.subscribe( r => this._invalidInput = r);
  }

  private clearField() {
    this.value = null;
  }

  onInput() {
    this.input.emit({ 
      name: this.name,
      value: this.value
    });
  }
}
