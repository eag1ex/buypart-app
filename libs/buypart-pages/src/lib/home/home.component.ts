import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  Iproduct,
  IfilterProd,
  IfilterSort,
  IbreakPoint,

} from '@buypart/interfaces';
import { log, copy } from 'x-utils-es/esm';
import { productList } from './dummy-product-list';
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

  // set initial sort
  selectedSort: IfilterSort = { name: 'Popularity', value: 'popularity' }
  // se initial filter
  selectedFilter: IfilterProd = { name: 'Continental', value: 'continental', type: 'premium' }
  constructor(private responsiveService: ResponsiveService) {


    // updates responsiveState on browser resize
    this.initResponsive();

  }


  // updateProducts(): void {
  //   // update label on productList
  //   this.productList.forEach((prod) => {
  //     if (this.responsiveState) {

  //       const setLargeLabels = () => {
  //         if (prod.stock.value === 'out') prod.cta.label = 'cart-notify-lg'
  //         if (prod.stock.value !== 'out') prod.cta.label = 'add-card-lg'
  //       }

  //       const setMedLabels = () => {
  //         if (prod.stock.value === 'out') prod.cta.label = 'cart-notify-md';
  //         if (prod.stock.value !== 'out') prod.cta.label = 'add-card-md';
  //       };

  //       const setSmallLabels = () => {
  //         if (prod.stock.value === 'out') prod.cta.label = 'cart-notify-sm';
  //         if (prod.stock.value !== 'out') prod.cta.label = 'add-card-sm';
  //       };

  //       // changing icon label based on size criteria
  //       if (['xl', 'full'].indexOf(this.responsiveState.name) !== -1) setLargeLabels();
  //       if (['sm', 'xs', 'md'].indexOf(this.responsiveState.name) !== -1) setMedLabels();
  //       if (['lg'].indexOf(this.responsiveState.name) !== -1) setSmallLabels();

  //     }
  //   });
  // }

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
