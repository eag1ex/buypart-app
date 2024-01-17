import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import {
  Iproduct,
  IfilterProd,
  IfilterSort,
  IbreakPoint,
  Isize,
} from '@buypart/interfaces';
import { log, copy, warn, delay, sq } from 'x-utils-es/esm';
import { productList } from './product-list.data';
import { ResponsiveService } from '@buypart/services';
import { isOdd } from '@buypart/utils';
import { DragScrollComponent } from 'ngx-drag-scroll';

/**
 * This component manages data distribution to other components, sorting and filtering
 * - initialises breakPoint {ResponsiveService} which sends updates to {ProductComponent} and {ProductPremComponent}
 */

@Component({
  selector: 'buypart-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  isOdd = isOdd;
  delay = delay;
  staged = sq();
  responsiveState: IbreakPoint;
  scrollableEnabled = null;
  productList: Iproduct[] = productList;
  premProductList: Iproduct[];
  // set initial sort
  selectedSort: IfilterSort = { name: 'All', value: 'all' };
  sortByValue: number;
  // se initial filter
  selectedFilter: IfilterProd = {
    name: 'Continental',
    value: 'continental',
    type: 'premium',
  };

  constructor(private responsiveService: ResponsiveService) {
    // filter out premium products and up to 2 items
    this.premProductList = copy(
      this.productList.filter((n, i) => n.featured)
    ).splice(0, 2);
    if (!this.premProductList.length)
      warn('[premProductList]', ' no premProductList available!');

    // updates responsiveState on browser resize
    this.initResponsive();
  }

  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;

  initResponsive(): void {
    const getDeviceWidth = this.responsiveService.getDeviceWidth();
    this.responsiveState = this.responsiveService.breakPoint(getDeviceWidth);
    if (this.bpTest(['xs', 375], this.responsiveState)) {
      this.scrollableEnabled = true;
    }
    this.responsiveService.init(async ({ breakPoint }) => {
      if (breakPoint) {
        if (this.bpTest(['xs', 375], breakPoint)) {
          this.scrollableEnabled = true;
          await delay(100); // allow some time to load scrollable
        } else {
          this.scrollableEnabled = false;
        }
        log({ breakPoint });
        this.responsiveState = breakPoint;
      }
    });
  }

  // update product sortBy selection
  public filterNavAction(str: string): void {
    if (str) {
      // if popularity sort from high to low
      if (str === 'popularity') this.sortByValue = 1;
      // otherwise do no sort
      else this.sortByValue = 0;
    }
  }

  public productPremAction(prod: Iproduct): void {
    this.productList.forEach((el) => {
      if (el.id === prod.id) {
        el = prod;
        //  log('[productPremAction]', el)
      }
    });
  }

  public productAction(prod: Iproduct): void {
    this.productList.forEach((el) => {
      if (el.id === prod.id) {
        el = prod;
        //   log('[productAction]', el)
      }
    });
  }

  /** test passing breakpoint
   * - accepting breakpoint size for custom compearance
   * - accepting ref for custom compearance
   */
  bpTest(arr: Isize[] | any = [], breakPoint?: IbreakPoint): boolean {
    const bp = breakPoint || this.responsiveState;
    if (!bp) return false;
    return (
      arr.filter((n: any) => {
        return n === bp.name || bp.size === Number(n) || bp.ref === n;
      }).length > 0
    );
  }

  // -------------- drag-scroll events
  onIndexChanged(d): void {
    log('onIndexChanged', d);
  }

  onDsInitialized(d): void {
    log('onDsInitialized');
  }
  // :end

  ngAfterViewInit(): void {
    this.staged.resolve(true);
  }

  ngOnInit(): void {
    log('home page loaded');
    this.responsiveService.responsiveReady.resolve();
  }

  ngOnDestroy(): void {
    this.responsiveService.removeResize();
  }
}
