import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import {sq} from 'x-utils-es/umd'


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
export class ScrollableComponent implements OnInit, AfterViewInit {
  staged = sq();

  viewReady = false
  constructor() {
    this.staged.promise.then(n => {
      this.viewReady = true
      this.ds.moveTo(0); // start scrowlable at 0 index
    })
  }

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  ngAfterViewInit(): void {
    this.staged.resolve()
  }

  ngOnInit(): void {
  }

}
