import { log } from 'x-utils-es/esm';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, sq } from 'x-utils-es/esm';
import { IappGlobals } from '@buypart/interfaces';

declare var APP_GLOBALS: IappGlobals;

@Component({
  selector: 'buypart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public appName = 'buypart';
  appLoaded = sq();
  removeSpinner = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    protected router: Router,
    public elementRef: ElementRef
  ) {
    this.routerEvents();
  }

  private routerEvents(): void {
    this.router.events.subscribe(async (val: any) => {
      log('[app][loading]', val.constructor.name);

      const { routerEvent } = val;

      if (routerEvent && this.currentRoute('/app/home')) {
        log(
          'NavigationEnd',
          'currentRoute /app/home',
          this.currentRoute('/app/home')
        );

        // slightly delay loading of app
        await delay(2000);
        this.appLoaded.resolve(true);

        // backup in case out spinner fails
        this.removeSpinner = true
        this.elementRef.nativeElement.classList.remove(
          'blur-app-while-loading');
      }
    });
  }

  private currentRoute(val = ''): boolean {
    const routerState =
      (this.activatedRoute.snapshot as any)._routerState || {};
    if ((routerState.url || '').includes(val)) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    // to tell index.html angular has loaded
    APP_GLOBALS.buypart_loaded = true;
  }
}
