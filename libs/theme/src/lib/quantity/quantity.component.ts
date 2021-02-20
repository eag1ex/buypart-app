import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IbreakPoint } from '@buypart/interfaces';
import { breakPointSmaller } from '@buypart/utils';
import { log } from 'x-utils-es/esm';

/**
 * example : `<buypart-quantity [value]="number", (act)="event($event)" ></buypart-quantity>`
 *
 */

@Component({
  selector: 'buypart-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent implements OnInit, OnChanges {
  // tslint:disable-next-line: variable-name
  val = 0;
  constructor() {}

  @Input() breakPoint: IbreakPoint;
  @Input() value = 0;
  @Output() act = new EventEmitter();

  breakPointSmaller = () => breakPointSmaller((this.breakPoint || {}).name);

  up(): void {
    this.value++;
    this.act.emit(this.value);
  }

  down(): void {
    if (this.value <= 0) {
      return undefined;
    }

    this.value--;
    this.act.emit(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // log('ngOnChanges', changes.product);
  }

  ngOnInit(): void {
    if (!this.value) this.value = this.val;
  }
}
