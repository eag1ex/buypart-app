import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { Iproduct, IbreakPoint, Isize } from '@buypart/interfaces';
import {
  breakPointSmaller,
  breakPointLarger,
  nicePrice,
  isMobile,
} from '@buypart/utils';
import { log, delay } from 'x-utils-es/esm';

/**
 * This component handles each product and manages self layout detection based on {breakPoint}
 * - styles and overrides: in xx.scss (base layout), ._responsive.scss, and in app styles.scss (global overrides)
 * example : `<buypart-product [product] [breakPoint] (action)="event($event)"></buypart-product>`
 *
 */
@Component({
  selector: 'buypart-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  nicePrice = nicePrice;
  breakPointClasses = {
    size: '', // break-point-{sizeRef}
    ref: '', // device-{sizeRef}-{size}  custom mobile reference
  };

  constructor(private elementRef: ElementRef) {
    // REVIEW for now disabled animation on mobile
    if (isMobile(navigator)) {
      this.elementRef.nativeElement.setAttribute('animation', false);
    } else {
      this.elementRef.nativeElement.setAttribute('animation', true);
    }
  }

  @Input() product: Iproduct;
  @Input() breakPoint: IbreakPoint;
  @Output() action = new EventEmitter();

  get breakPointSmaller(): boolean {
    return breakPointSmaller((this.breakPoint || {}).name);
  }
  get breakPointLarger(): boolean {
    return breakPointLarger((this.breakPoint || {}).name);
  }

  /** test passing breakpoint
   * - accepting breakpoint size for custom compearance
   * - accepting ref for custom compearance
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

  updateProduct(): void {
    if (!this.product) return;

    // set in stock status
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
      if (['xl', 'full'].indexOf(this.breakPoint.name) !== -1) setLargeLabels();
      if (['sm', 'xs', 'md'].indexOf(this.breakPoint.name) !== -1)
        setMedLabels();
      if (['lg'].indexOf(this.breakPoint.name) !== -1) setSmallLabels();
    }
    // this.product = Object.assign({}, this.product);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.breakPoint) {
      this.breakPointClasses.size = `break-point-${changes.breakPoint.currentValue.name}`;
      this.breakPointClasses.ref = `device-${changes.breakPoint.currentValue.name}-${changes.breakPoint.currentValue.size}`;

      if (breakPointLarger(changes.breakPoint.currentValue.name)) {
        this.breakPointClasses.size = `break-point-is-large`;
      }
      if (breakPointSmaller(changes.breakPoint.currentValue.name)) {
        this.breakPointClasses.size = `break-point-is-small`;
      }
    }

    if (changes.product || changes.breakPoint) {
      this.updateProduct();
    }
    log('ngOnChanges/product', changes);
  }

  // simple animation
  enableAnimation(): void {
    // REVIEW add cleam mobile animation later
    if (isMobile(navigator)) {
      return undefined;
    }

    if (
      !(this.elementRef.nativeElement.classList.value || '').includes(
        'animation'
      )
    ) {
      this.elementRef.nativeElement.classList.add('animation');
    }
  }

  ngOnInit(): void {
    delay(1000).then(() => this.enableAnimation());
  }

  ngAfterViewInit(): void {
    this.updateProduct();
  }

  ngOnDestroy(): void {}
}
