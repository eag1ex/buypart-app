import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { IbreakPoint, Iproduct, Isize } from '@buypart/interfaces';
import { log } from 'x-utils-es/esm';
import { nicePrice } from '@buypart/utils';

/**
 * This component handles each product and manages self layout detection based on {breakPoint}
 * - this componend greather layout requirements, so it uses {bpTest([...])} method better detection
 * - styles and overrites: in xx.scss (base layout), ._responsive.scss, and in app styles.scss (global overritese)
 * example : `<buypart-product-prem [breakPoint] [product] (action)="event($event)"></buypart-product-prem>`
 *
 */

@Component({
  selector: 'buypart-product-prem',
  templateUrl: './product-prem.component.html',
  styleUrls: ['./product-prem.component.scss'],
})
export class ProductPremComponent implements OnInit, OnDestroy, OnChanges {
  nicePrice = nicePrice;
  breakPointClasses = {
    device: '', // device-{deviceName}
    size: '', // break-point-{sizeRef}
    slider: '', // in-slider-view (added conditionally)
    ref: '', // device-{sizeRef}-{size}  custom mobile reference
  };

  constructor() {}

  @Input() product: Iproduct;
  @Input() breakPoint: IbreakPoint;
  @Output() action = new EventEmitter();

  /** test passing breakpoint
   * - accepting breakpoint size for custom comparance
   * - accepting ref for custom comparance
   */
  bpTest(arr: Isize[] | any = []): boolean {
    return (
      arr.filter((n: any) => {
        return (
          n === this.breakPoint.name ||
          this.breakPoint.size === Number(n) ||
          this.breakPoint.ref === n
        );
      }).length > 0
    );
  }
  // inclusive of ipad
  get breakPointLarger(): boolean {
    return this.bpTest(['full', 'xl', 1024]);
  }

  // does not include ipad
  get breakPointSmaller(): boolean {
    return this.bpTest(['992px', 'md', 'sm', 'xs']);
  }

  /**
   * Listen for quantity order changes, then emit changes to base component
   */
  public quantityAction(num: number): void {
    if (this.product.quantity !== num) {
      this.product.quantity = num;
      this.product = Object.assign({}, this.product);
      this.action.emit(this.product);
    }
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

      // set premLabel image, we got 2 sizes
      if (this.breakPoint.size <= 768) {
        this.product.premLabel.ref = 'tires-auto-express-sm';
      } else {
        this.product.premLabel.ref = 'tires-auto-express';
      }
    }
   // log('product updated');
   // this.product = Object.assign({}, this.product);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.breakPoint) {
      // always reset
      this.breakPointClasses.size = '';
      this.breakPointClasses.device = '';
      this.breakPointClasses.slider = '';
      this.breakPointClasses.ref = '';

      this.breakPointClasses.size = `break-point-${changes.breakPoint.currentValue.name}`;
      this.breakPointClasses.ref = `device-${changes.breakPoint.currentValue.name}-${changes.breakPoint.currentValue.size}`;

      if (changes.breakPoint.currentValue.ref === 'ipad') {
        this.breakPointClasses.device = `device-ipad`;
      }

      if (
        changes.breakPoint.currentValue.name === 'sm' ||
        changes.breakPoint.currentValue.name === 'xs'
      ) {
        this.breakPointClasses.device = 'device-mobile';
      }

      if (changes.breakPoint.currentValue.size <= 375) {
        //  log('changes.breakPoint.currentValue.size', changes.breakPoint.currentValue.size)
        this.breakPointClasses.slider = 'in-slider-view';
      }

      if (this.breakPointLarger) {
        this.breakPointClasses.size = `break-point-is-large`;
      }

      if (this.breakPointSmaller) {
        this.breakPointClasses.size = `break-point-is-small`;
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
