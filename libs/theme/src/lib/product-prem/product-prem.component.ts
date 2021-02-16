import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { IbreakPoint, Iproduct } from '@buypart/interfaces';


/**
  * Premium product
  * example : `<buypart-product-prem [product]="{...}" (action)="event($event)"></buypart-product-prem>`
  *
 */
@Component({
  selector: 'buypart-product-prem',
  templateUrl: './product-prem.component.html',
  styleUrls: ['./product-prem.component.scss'],
})
export class ProductPremComponent implements OnInit, OnDestroy, OnChanges {
  constructor() {}

  @Input() product: Iproduct;
  @Input() breakPoint: IbreakPoint;
  @Output() action = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
   // log('ngOnChanges', changes.product);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
