import { log } from 'x-utils-es/esm';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, sq } from 'x-utils-es/esm';
@Component({
  selector: 'buypart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public appName = 'buypart';
  appLoaded = sq();
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

      if (val.constructor.name === 'NavigationEnd') {
        log(
          'NavigationEnd',
          'currentRoute /app/home',
          this.currentRoute('/app/home')
        );

        // slightly delay loading of app
        await delay(1000);
        this.appLoaded.resolve(true);
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

  ngOnInit(): void {}
}
