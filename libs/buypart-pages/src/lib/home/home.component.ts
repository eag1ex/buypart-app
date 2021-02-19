import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  Iproduct,
  IfilterProd,
  IfilterSort,
  IbreakPoint,
  Isize
} from '@buypart/interfaces';
import { log, copy, warn, delay } from 'x-utils-es/esm';
import { productList } from './product-list.data';
import { ResponsiveService } from '@buypart/services';
import { isOdd } from '@buypart/utils';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'buypart-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isOdd = isOdd
  responsiveState: IbreakPoint;
  scrolableEnabled = null
  productList: Iproduct[] = productList;
  premProductList: Iproduct[]
  // set initial sort
  selectedSort: IfilterSort = { name: 'Popularity', value: 'popularity' }
  // se initial filter
  selectedFilter: IfilterProd = { name: 'Continental', value: 'continental', type: 'premium' }
  constructor(private responsiveService: ResponsiveService) {


    // filter out premium products and up to 2 items
    this.premProductList = copy(this.productList.filter((n, i) => n.withPremium)).splice(0, 2)
    if (!this.premProductList.length) warn('[premProductList]', ' no premProductList available!')

    // updates responsiveState on browser resize
    this.initResponsive();
  }



  initResponsive(): void {

    const getDeviceWidth = this.responsiveService.getDeviceWidth();
    this.responsiveState = this.responsiveService.breakPoint(getDeviceWidth);
    if (this.bpTest(['xs', 375], this.responsiveState )){
      this.scrolableEnabled = true
    }
    this.responsiveService.init(async ({ breakPoint }) => {
      if (breakPoint) {
        if (this.bpTest(['xs', 375], breakPoint)){
          this.scrolableEnabled = true
          await delay(100) // allow some time to load scrollable
        } else{
          this.scrolableEnabled = false
        }
        log({breakPoint})

        this.responsiveState = breakPoint
      }
    });
  }

  public filterNavAction(data: any): void{
    log('[filterNavAction]', data);
  }

  public productPremAction(prod: Iproduct): void {
    log('[productPremAction]', prod);
  }
  public productAction(prod: Iproduct): void {
    log('[productAction]', prod);
  }

  copy(data: any): any{
    return copy(data)
  }

  /** test passing breakpoint
   * - accepting breakpoint size for custom comparance
   * - accepting ref for custom comparance
   */
  bpTest(arr: Isize[] | any= [], breakPoint?: IbreakPoint): boolean{
    const bp = breakPoint || this.responsiveState
    if (!bp) return false
    return arr.filter((n: any) => {
     return  n === bp.name ||
     bp.size === Number(n) ||
     bp.ref === n
    }).length > 0
  }


  ngOnInit(): void {
    log('home page loaded');
    this.responsiveService.responsiveReady.resolve();
  }

  ngOnDestroy(): void {
    this.responsiveService.removeResize();
  }
}
