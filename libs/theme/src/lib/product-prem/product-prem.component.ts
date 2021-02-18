import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { IbreakPoint, Iproduct, Isize } from '@buypart/interfaces';
import {  breakPointSmall } from '@buypart/utils';

import {log} from 'x-utils-es/esm'
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

  bpIs(ref: Isize): boolean {
    if (this.breakPoint.ref === ref) return true;
    else return this.breakPoint.name === ref;
  }

  // inclusive of ipad, exclusive of 992px
  get breakPointLarger(): boolean {
    return (
      (this.bpIs('full') || this.bpIs('xl') || this.bpIs('lg')) &&
      !this.bpIs('992px' as any)
    );
  }

  // does not include ipad
  get breakPointSmaller(): boolean {
    return (
      this.bpIs('992px' as any) ||
      this.bpIs('md') ||
      this.bpIs('sm') ||
      this.bpIs('xs')
    );
  }

  get isMdOrSmall(): boolean {
    return this.bpIs('md') || this.bpIs('sm') || this.bpIs('xs');
  }

  get isMobile(): boolean {
    return this.bpIs('sm') || this.bpIs('xs');
  }

  get isIpad(): boolean {
    return (this.breakPoint || {}).ref === 'ipad';
  }

  get ipadOrSmaller(): boolean {
    return (this.breakPoint || {}).ref === 'ipad' || this.breakPointSmaller;
  }

  updateProduct(): void {
    if (!this.product) return;

    if (this.product.stock.value === 'in') {
      this.product.stock.ref = 'tick-green';
    }

    if (this.product.stock.value === 'low') {
      this.product.stock.ref = 'tick-yellow';
    }
    if (this.product.stock.value === 'out') {
      this.product.stock.ref = 'tick-red';
    }

    // set icon on breakpoint change
    if (this.breakPoint) {
      const setLargeLabels = () => {
        if (this.product.stock.value === 'out')
          this.product.cta.label = 'cart-notify-lg';
        if (this.product.stock.value !== 'out')
          this.product.cta.label = 'add-card-lg';
      };

      const setMedLabels = () => {
        if (this.product.stock.value === 'out')
          this.product.cta.label = 'cart-notify-md';
        if (this.product.stock.value !== 'out')
          this.product.cta.label = 'add-card-md';
      };

      const setSmallLabels = () => {
        if (this.product.stock.value === 'out')
          this.product.cta.label = 'cart-notify-sm';
        if (this.product.stock.value !== 'out')
          this.product.cta.label = 'add-card-sm';
      };

      // changing icon label based on size criteria
      if (['xl', 'full', 'lg'].indexOf(this.breakPoint.name) !== -1)
        setLargeLabels();
      if (['md'].indexOf(this.breakPoint.name) !== -1) setMedLabels();
      if (['sm', 'xs'].indexOf(this.breakPoint.name) !== -1) setSmallLabels();
    }
    log('product updated');
    this.product = Object.assign({}, this.product);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.breakPoint) {
      this.breakPointClassName = `break-point-${changes.breakPoint.currentValue.name}`;
      if (changes.breakPoint.currentValue.ref === 'ipad')
        this.breakPontDeviceRef = `device-ipad`;
      if (changes.breakPoint.currentValue.name === 'sm' || changes.breakPoint.currentValue.name === 'xs')
        this.breakPontDeviceRef = `device-mobile`;

      if (this.breakPointLarger) {
        this.breakPointIsNiceName = `break-point-is-large`;
      }


      if (this.breakPointSmaller) {
        this.breakPointIsNiceName = `break-point-is-small`;
      }
    }
    if (changes.product || changes.breakPoint) {
      this.updateProduct();
    }
    if (changes.breakPoint) log('ngOnChanges', changes.breakPoint);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
