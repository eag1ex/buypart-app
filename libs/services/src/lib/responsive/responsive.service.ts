// tslint:disable: variable-name
// tslint:disable: ban-types

import { Injectable } from '@angular/core';
import { IbreakPoint, Isq } from '@buypart/interfaces';
import { sq, log, warn } from 'x-utils-es/esm';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  /**
   * we need to call responsiveReady on `ngOnInit` of the component we are loading it from
   * so it will get correct screendimentions
   *
   */
  public responsiveReady: Isq = sq();
  _onchange_cb: ({ breakPoint: IbreakPoint }) => void;
  _lastState: IbreakPoint = null;
  index = 0;

  constructor() {}

  breakPoint(size: number): IbreakPoint {
    if (!size) return { name: 'full', size: '>=1200px' };
    if (size >= 1200) return { name: 'xl', size: '>=1200px' };
    if (size >= 1024) return { name: 'lg', size: '>=992px', ref: 'ipad' };
    if (size >= 992) return { name: 'lg', size: '>=992px',  ref: '992px' };
    if (size >= 768) return { name: 'md', size: '>=768px' };
    if (size >= 576) return { name: 'sm', size: '>=576px' };
    if (size < 576) return { name: 'xs', size: '<576px' };
    else return { name: 'full', size: '>=1200px' };
  }

  /**
   * current screen width
   */
  getDeviceWidth(): number {
    return window.innerWidth > 0 ? window.innerWidth : screen.width;
  }

  resizeEvent(): void {
    const deviceWidth = this.getDeviceWidth();
    const newState = this.breakPoint(deviceWidth);
    if (!newState) return;

    if (this.index > 0) {
      if (this._lastState.size === newState.size) return;
    }

    this._lastState = newState;
    this._onchange_cb({ breakPoint: this._lastState });
    this.index++;
  }

  /**
   * init will call once responsiveReady.resolve() was called
   */
  async init(cb: ({ breakPoint: IbreakPoint }) => void): Promise<any> {
    await this.responsiveReady.promise;
    if (typeof cb === 'function') {
      this._onchange_cb = cb;
    }

    if (typeof this._onchange_cb === 'function') {
      window.addEventListener('resize', this.resizeEvent.bind(this));
    } else {
      warn('[ResponsiveService] onChange not yet set');
    }
  }

  removeResize(): void {
    try {
      window.removeEventListener('resize', this.resizeEvent.bind(this));
    } catch (err) {}
  }
}
