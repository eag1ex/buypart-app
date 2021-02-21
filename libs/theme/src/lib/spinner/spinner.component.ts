import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { delay } from 'x-utils-es/esm';

/**
 * adds blure class to home component via @Input parentElement
 * example <buypart-spinner [loaded] [parentElement]></buypart-spinner>
 */

@Component({
  selector: 'buypart-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnChanges {
  constructor(private elementRef: ElementRef) {}
  @Input() parentElement: ElementRef; // so we can add some cool blur effect (located in app main styles.scss)
  @Input() loaded: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.parentElement) {
      if (
        !(this.parentElement.nativeElement.classList.value || '').includes(
          'blur-app-while-loading'
        )
      ) {
        this.parentElement.nativeElement.classList.add(
          'blur-app-while-loading'
        );
      }
    }

    if (this.loaded) {
      if (
        !(this.elementRef.nativeElement.classList.value || '').includes(
          'hide-spinner'
        )
      ) {
        this.elementRef.nativeElement.classList.add('hide-spinner');
      }
     // delay(100).then(() => {
      this.parentElement.nativeElement.classList.remove(
          'blur-app-while-loading'
        );
      // });

     // delay(300).then(() => {
      if (
          !(this.elementRef.nativeElement.classList.value || '').includes(
            'hidden'
          )
        ) {
          this.elementRef.nativeElement.classList.add('hidden');
        }
    //  });
    }
  }

  ngOnInit(): void {}
}
