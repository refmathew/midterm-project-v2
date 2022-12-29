import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TogglerService {
  private _shown: boolean = true;
  private _shown$ = new BehaviorSubject(this._shown);

  constructor() { }

  
  public getVisibility(): Observable<boolean> {
    return this._shown$;
  }

  public setVisibility(isShown: boolean) {
    this._shown = isShown;
    this._shown$.next(this._shown);
  }
}
