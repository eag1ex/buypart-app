import { log } from 'x-utils-es/esm';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'buypart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public appName = 'buypart';
  constructor(
    private activatedRoute: ActivatedRoute,
    protected router: Router
  ) {
    this.routerEvents()
  }

  private routerEvents(): void{

    this.router.events.subscribe((val: any) => {

      log('[app][loading]', val.constructor.name)

      if (val.constructor.name === 'NavigationEnd') {
        log('NavigationEnd', 'currentRoute /app/home', this.currentRoute('/app/home'))
      }
    });
  }

  private currentRoute(val = ''): boolean {
    const routerState = (this.activatedRoute.snapshot as any)._routerState || {};
    if ((routerState.url || '').includes(val)) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {}
}
