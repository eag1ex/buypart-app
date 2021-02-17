import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { IbreakPoint, Iproduct } from '@buypart/interfaces';
import { breakPointLarger, breakPointSmaller } from '@buypart/utils';


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
    // provide class name of the exect size
    breakPointClassName = '';
    // provide nice name when the size is smaller then large
    breakPointIsNiceName = '';

    // available optionally on breakPoint service
    breakPontDeviceRef = '';
  constructor() {}

  @Input() product: Iproduct;
  @Input() breakPoint: IbreakPoint;
  @Output() action = new EventEmitter();

  get breakPointSmaller(): boolean{
    return breakPointSmaller((this.breakPoint || {}).name);
  }
  get breakPointLarger(): boolean{
    return  breakPointLarger((this.breakPoint || {}).name);
  }

  get isIpad(): boolean{
    return (this.breakPoint || {}).ref === 'ipad'
  }
  get ipadOrSmaller(): boolean{
    return (this.breakPoint || {}).ref === 'ipad' || this.breakPointSmaller
  }

  updateProduct(): void{
    if (!this.product) return
    let updated = false
    if (this.product.stock.value === 'in'){
      this.product.stock.ref = 'tick-green'
      updated = true
    }

    if (this.product.stock.value === 'low'){
      this.product.stock.ref = 'tick-yellow'
      updated = true
    }
    if (this.product.stock.value === 'out'){
      this.product.stock.ref = 'tick-red'
      updated = true
    }

    if (updated) this.product = Object.assign({}, this.product)
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.breakPoint) {
      this.breakPointClassName = `break-point-${changes.breakPoint.currentValue.name}`;
      if (changes.breakPoint.currentValue.ref === 'ipad')  this.breakPontDeviceRef = `device-ipad`
      if (breakPointLarger(changes.breakPoint.currentValue.name)) {
        this.breakPointIsNiceName = `break-point-is-large`;
      }
      if (breakPointSmaller(changes.breakPoint.currentValue.name)) {
        this.breakPointIsNiceName = `break-point-is-small`;
      }
    }
    if (changes.product){
      this.updateProduct()
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
