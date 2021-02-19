import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  Iproduct,
  IfilterProd,
  IfilterSort,
  IbreakPoint,

} from '@buypart/interfaces';
import { log, copy, warn } from 'x-utils-es/esm';
import { productList } from './product-list.data';
import { ResponsiveService } from '@buypart/services';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'buypart-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  responsiveState: IbreakPoint;
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

    this.responsiveService.init(({ breakPoint }) => {
      if (breakPoint) {
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


  ngOnInit(): void {
    log('home page loaded');
    this.responsiveService.responsiveReady.resolve();
  }

  ngOnDestroy(): void {
    this.responsiveService.removeResize();
  }
}
