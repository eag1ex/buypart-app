import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { IfilterProd, IfilterSort } from '@buypart/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { unsubAll } from '@buypart/utils';
import { log } from 'x-utils-es/esm';

/**
 * example : `<buypart-filter-nav [sortSelection] [filterSelection] (action)="event($event)"></buypart-filter-nav>`
 *
 */
@Component({
  selector: 'buypart-filter-nav',
  templateUrl: './filter-nav.component.html',
  styleUrls: ['./filter-nav.component.scss'],
})
export class FilterNavComponent implements OnInit, OnDestroy, OnChanges {
  filterChipsForm = new FormControl();
  unsubs: Array<any> = [];
  chipList: IfilterProd[] = [
    { name: 'Continental', value: 'continental', type: 'premium' },
  ];
  sortList: IfilterSort[] = [{ name: 'Popularity', value: 'popularity' }];
  selectedSort: string;
  constructor() {
    // set initial values
    this.filterSelection = this.chipList[0];
    this.sortSelection = this.sortList[0];
    this.selectedSort = this.sortSelection.value;
  }

  @Input() filterSelection: IfilterProd;
  @Input() sortSelection: IfilterSort;
  @Output() action = new EventEmitter();

  get productFilter$(): Observable<IfilterProd> {
    //
    return this.filterChipsForm.valueChanges.pipe(
      map((n: IfilterProd) => {
        // log('filterChips', n);
        return n;
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filterSelection)
      this.filterChipsForm.setValue(this.filterSelection);
    if (changes.sortSelection) this.selectedSort = this.sortSelection.value;
  }

  ngOnInit(): void {
    const s = this.productFilter$.subscribe((d) => {
      log('new filter value set', d);
      // this.action.emit() // emit something to master component
    });

    this.unsubs.push(s);
  }

  ngOnDestroy(): void {
    unsubAll(this.unsubs);
  }
}
