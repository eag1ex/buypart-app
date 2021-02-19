

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
import {breakPointSmaller, breakPointLarger, nicePrice} from '@buypart/utils'


/**
  * example : `<buypart-product [product] [breakPoint] (action)="event($event)"></buypart-product>`
  *
 */
@Component({
  selector: 'buypart-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {
  nicePrice = nicePrice
  breakPointClasses = {
    size: '', // break-point-{sizeRef}
    ref: '' // device-{sizeRef}-{size}  custom mobile reference
  }

  constructor() {
       // this.action.emit({});
  }

  @Input() product: Iproduct;
  @Input() breakPoint: IbreakPoint;
  @Output() action = new EventEmitter();


  get breakPointSmaller(): boolean{
    return breakPointSmaller((this.breakPoint || {}).name);
  }
  get breakPointLarger(): boolean{
    return breakPointLarger((this.breakPoint || {}).name);
  }

  updateProduct(): void{
    if (!this.product) return

    // set in stock status
    if (this.product.stock.value === 'in'){
      this.product.stock.ref = 'tick-green'
    }

    if (this.product.stock.value === 'low'){
      this.product.stock.ref = 'tick-yellow'
    }
    if (this.product.stock.value === 'out'){
      this.product.stock.ref = 'tick-red'
    }

    // set icon on breakpoint change
    if (this.breakPoint){

        const setLargeLabels = () => {
          if (this.product.stock.value === 'out') this.product.cta.label = 'cart-notify-lg'
          if (this.product.stock.value !== 'out') this.product.cta.label = 'add-card-lg'
        }

        const setMedLabels = () => {
          if (this.product.stock.value === 'out') this.product.cta.label = 'cart-notify-md';
          if (this.product.stock.value !== 'out') this.product.cta.label = 'add-card-md';
        };

        const setSmallLabels = () => {
          if (this.product.stock.value === 'out') this.product.cta.label = 'cart-notify-sm';
          if (this.product.stock.value !== 'out') this.product.cta.label = 'add-card-sm';
        };

        // changing icon label based on size criteria
        if (['xl', 'full'].indexOf(this.breakPoint.name) !== -1) setLargeLabels();
        if (['sm', 'xs', 'md'].indexOf(this.breakPoint.name) !== -1) setMedLabels();
        if (['lg'].indexOf(this.breakPoint.name) !== -1) setSmallLabels();

    }

    this.product = Object.assign({}, this.product)
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.breakPoint) {
      this.breakPointClasses.size = `break-point-${changes.breakPoint.currentValue.name}`;
      if (breakPointLarger(changes.breakPoint.currentValue.name)) {
        this.breakPointClasses.ref = `break-point-is-large`

      }
      if (breakPointSmaller(changes.breakPoint.currentValue.name)) {
        this.breakPointClasses.ref = `break-point-is-small`
      }
    }

    if (changes.product || changes.breakPoint){
      this.updateProduct()
    }

  }


  ngOnInit(): void {
    this.updateProduct()
  }

  ngOnDestroy(): void {

  }
}
