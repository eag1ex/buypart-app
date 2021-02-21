import { Component, Input, OnInit } from '@angular/core';
import { Iicon } from '@buypart/interfaces';

/**
 * example : `<buypart-icon name="approved-oe"></buypart-icon>`
 *
 */

@Component({
  selector: 'buypart-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  public icons: Iicon[];
  constructor() {
    const dir = '/libs/theme/assets';

    // available icons and labels
    this.icons = [
      { name: 'add-card-lg', url: `${dir}/icons/add-card-lg-ico.svg` },
      { name: 'add-card-md', url: `${dir}/icons/add-card-md-ico.svg` },
      { name: 'add-card-sm', url: `${dir}/icons/add-card-sm-ico.svg` },
      { name: 'cart-notify-sm', url: `${dir}/icons/cart-bell-sm-icon.svg` },
      { name: 'cart-notify-md', url: `${dir}/icons/cart-bell-md-icon.svg` },
      { name: 'cart-notify-lg', url: `${dir}/icons/cart-bell-lg-icon.svg` },
      { name: 'cart-off', url: `${dir}/icons/cart-off.svg` },
      { name: 'cart-on', url: `${dir}/icons/cart-on.svg` },
      { name: 'hamburger', url: `${dir}/icons/hamburger-ico.svg` },
      { name: 'orders', url: `${dir}/icons/orders-ico.svg` },
      { name: 'search', url: `${dir}/icons/search-ico.svg` },
      { name: 'tick-green', url: `${dir}/icons/tick-green.svg` },
      { name: 'tick-red', url: `${dir}/icons/tick-red.svg` },
      { name: 'tick-yellow', url: `${dir}/icons/tick-yellow.svg` },
      { name: 'account', url: `${dir}/icons/account-ico.svg` },
      { name: 'approved-oe', url: `${dir}/labels/approved-oe-label.svg` },
    ];
  }

  @Input() name: string;
  @Input() desc: string;

  public get url(): string {
    return (
      (this.icons.filter((n) => n.name === (this.name || ''))[0] || {}).url ||
      ''
    );
  }
  ngOnInit(): void {}
}
