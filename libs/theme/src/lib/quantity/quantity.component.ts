
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IbreakPoint } from '@buypart/interfaces';
import {breakPointSmaller} from '@buypart/utils'

/**
  * example : `<buypart-quantity [value]="number", (action)="event($event)" ></buypart-quantity>`
  *
 */

@Component({
  selector: 'buypart-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit, OnChanges {

  // tslint:disable-next-line: variable-name
  _value = 0;
  constructor() {
  }

  @Input() breakPoint: IbreakPoint
  @Input() value = 0;
  @Output() action = new EventEmitter()

  breakPointSmaller = () => breakPointSmaller((this.breakPoint || {}).name)
  up(): void{
    this.value++;
    this.action.emit({value: this.value});
  }

  down(): void{
    if (this.value <= 0){
      return undefined;
    }
    this.action.emit({value: this.value});
    this.value--;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // log('ngOnChanges', changes.product);
   }

  ngOnInit(): void {
    if (!this.value) this.value = this._value;
  }

}
