import { AfterViewInit, Component, Input, OnInit, SimpleChanges, ViewChild, OnChanges} from '@angular/core';
import { IbreakPoint, Iproduct } from '@buypart/interfaces';

import { DragScrollComponent } from 'ngx-drag-scroll';
import {log, sq, copy} from 'x-utils-es/umd'


/**
  * Scrollable
  * example : `<buypart-scrollable [breakPoint] [premProductList] (action)="event($event)"></buypart-scrollable>`
  *
*/
@Component({
  selector: 'buypart-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.scss']
})
export class ScrollableComponent implements OnInit, AfterViewInit, OnChanges {
  staged = sq();
  copy = copy;
  viewReady = false
  loadList: Iproduct[] = []
  constructor() {
    this.staged.promise.then(n => {
      this.viewReady = true
      this.ds.moveTo(0); // start scrowlable at 0 index
    })
  }

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  // data flow: homeComponent (source) > ScrollableComponent (?update) > ProductpremComponent (result)
  @Input() premProductList: Iproduct[] = []
  @Input() breakPoint: IbreakPoint;

  // moveLeft(): void {
  //   this.ds.moveLeft();
  // }

  // moveRight(): void {
  //   this.ds.moveRight();
  // }

  // moveTo(index): void {
  //   this.ds.moveTo(index);
  // }

  ngOnChanges(changes: SimpleChanges): void {

    // if (changes.premProductList.currentValue){
    //   this.loadList = changes.premProductList.currentValue
    // }
  }

  ngAfterViewInit(): void {
    this.staged.resolve()
  }

  ngOnInit(): void {
  }

}
