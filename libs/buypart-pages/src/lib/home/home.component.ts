import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import {
  IfilterProd,
  IfilterSort,
  Iproduct,
  IbreakPoint,
  Isize,
} from '@buypart/interfaces';
import { log } from 'x-utils-es/esm';
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
  filterChipsProdForm = new FormControl();
  filterChipProductList: IfilterProd[] = [
    { name: 'Continental', value: 'continental', type: 'premium' },
  ];
  sortList: IfilterSort[] = [{ name: 'Popularity', value: 'popularity' }];
  selectedSort: string;
  constructor(private responsiveService: ResponsiveService) {
    this.productFilter();
    // set initial sort
    this.selectedSort = 'popularity';

    // updates responsiveState on browser resize
    this.initResponsive(this.updateProducts.bind(this));
    this.responsiveService.responsiveReady.promise.then(this.updateProducts.bind(this));
  }


  updateProducts(): void {
    // update label on productList
    this.productList.forEach((prod) => {
      if (this.responsiveState) {

        // changing icon label based on size criteria
        if (['xl', 'full'].indexOf(this.responsiveState.name) === -1) {
          if (prod.stock.value === 'out') prod.cta.label = 'cart-notify-sm'
          if (prod.stock.value !== 'out') prod.cta.label = 'add-card-sm'
        } else{
          if (prod.stock.value === 'out') prod.cta.label = 'cart-notify-lg'
          if (prod.stock.value !== 'out') prod.cta.label = 'add-card-lg'
        }
      }
    });
  }

  initResponsive(cb): void {
    const getDeviceWidth = this.responsiveService.getDeviceWidth();
    this.responsiveState = this.responsiveService.breakPoint(getDeviceWidth);

    this.responsiveService.init(({ breakPoint }) => {
      if (breakPoint) {
        this.responsiveState = breakPoint;
        cb();
      }
    });
  }

  private productFilter(): void {
    this.filterChipsProdForm.setValue(this.filterChipProductList[0]);
    this.filterChipsProdForm.valueChanges.pipe(
      map((n: IfilterProd) => {
        // console.log('filterChips', n);
        return n;
      })
    );
  }
  public productPremAction(prod: Iproduct): void {
    log('[productPremAction]', prod);
  }
  public productAction(prod: Iproduct): void {
    log('[productAction]', prod);
  }

  ngOnInit(): void {
    log('home page loaded');
    this.responsiveService.responsiveReady.resolve();
  }

  ngOnDestroy(): void {
    this.responsiveService.removeResize();
  }
}
