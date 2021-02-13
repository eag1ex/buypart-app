import { Component, Input, OnInit } from '@angular/core';
import { Iicon } from '@buypart/interfaces';

/**
  * example : `<buypart-icon name="'add-card-lg'"/>`
  *
 */

@Component({
  selector: 'buypart-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  constructor() {
    const dir = '/libs/theme/assets/icons';
    // available icons
    this.icons = [
      { name: 'add-card-lg', url: `${dir}/add-card-lg-ico.svg` },
      { name: 'add-card-sm', url: `${dir}/add-card-sm-ico.svg` },
      { name: 'cart-bell', url: `${dir}/cart-bell-icon.svg` },
      { name: 'cart-off', url: `${dir}/cart-off.svg` },
      { name: 'cart-on', url: `${dir}/cart-on.svg` },
      { name: 'hamburger', url: `${dir}/hamburger-ico.svg` },
      { name: 'orders', url: `${dir}/orders-ico.svg` },
      { name: 'search', url: `${dir}/search-ico.svg` },
      { name: 'tick-green', url: `${dir}/tick-green.svg` },
      { name: 'tick-red', url: `${dir}/tick-red.svg` },
      { name: 'tick-yellow', url: `${dir}/tick-yellow.svg` },
      { name: 'account', url: `${dir}/account-ico.svg` },
    ];
  }

  public icons: Iicon[];

  @Input() name: string;

  public loadIcon(name): string {
    return (this.icons.filter((n) => n.name === name)[0] || {}).url;
  }
  ngOnInit(): void {}
}
