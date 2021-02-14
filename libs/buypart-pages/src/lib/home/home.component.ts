import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { IfilterProd, IfilterSort, Iproduct } from '@buypart/interfaces';
import {log} from 'x-utils-es/esm';
import {productList} from './dummy-product-list';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'buypart-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList: Iproduct[] = productList;
  filterChipsProdForm = new FormControl();
  filterChipProductList: IfilterProd[] = [
    { name: 'Continental', value: 'continental', type: 'premium' },
  ];
  sortList: IfilterSort[] = [{ name: 'Popularity', value: 'popularity' }];
  selectedSort: string;
  constructor() {

    this.productFilter();
    // set initial sort
    this.selectedSort = 'popularity';
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

  public productAction(prod: Iproduct): void {
    log('[productAction]', prod);
  }

  ngOnInit(): void {
    log('home page loaded');
  }
}
