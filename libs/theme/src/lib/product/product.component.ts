
import { breakRefs } from '@buypart/utils';
import {

  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Iproduct, IbreakPoint, Isize } from '@buypart/interfaces';
import {log} from 'x-utils-es/esm';
import {breakPointSmaller, breakPointLarger} from '@buypart/utils'


/**
  * example : `<buypart-product [product]="{...}" (action)="event($event)"></buypart-product>`
  *
 */


@Component({
  selector: 'buypart-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {
  breakPointSmaller = breakPointSmaller
  // provide class name of the exect size
  breakPointClassName: string
  // provide nice name when the size is smaller then large
  breakPointIsNiceName: string
  // breakRefs = breakRefs as Isize[]
  constructor() {
    //    this.action.emit({ id: this.itemModel.id, lockMode: false });
  }
  @Input() product: Iproduct;
  @Input() breakPoint: IbreakPoint;
  @Output() action = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.breakPoint){
      this.breakPointClassName = `break-point-${changes.breakPoint.currentValue.name}`
      if (breakPointLarger(changes.breakPoint.currentValue.name)) {
        this.breakPointIsNiceName = `break-point-is-large`
      }
      if (breakPointSmaller(changes.breakPoint.currentValue.name)) {
        this.breakPointIsNiceName = `break-point-is-small`
      }

    }

    log(changes.breakPoint.currentValue)
   // log('ngOnChanges', changes.product);
  }

  // isBreak(str: Isize): boolean{
  //  return this.breakRefs.indexOf(str) !== -1
  // }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
