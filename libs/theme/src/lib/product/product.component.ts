import {

  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Iproduct, IbreakPoint } from '@buypart/interfaces';
import {log} from 'x-utils-es/esm';



/**
  * example : `<buypart-product [product]="{...}"></buypart-product>`
  *
 */


@Component({
  selector: 'buypart-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {
    //    this.action.emit({ id: this.itemModel.id, lockMode: false });
  }
  @Input() product: Iproduct;
  @Input() breakPoint: IbreakPoint;
  @Output() action = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
   // log('ngOnChanges', changes.product);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
