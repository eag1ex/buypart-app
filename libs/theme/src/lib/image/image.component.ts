import { Component, Input, OnInit } from '@angular/core';
import { Iimage } from '@buypart/interfaces';

/**
 * example : `<buypart-image name="tires-auto-express"></buypart-image>`
 *
 */
@Component({
  selector: 'buypart-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  images: Iimage[];
  constructor() {
    const dir = './libs/theme/assets';

    // available images
    this.images = [
      {
        name: 'tires-auto-express',
        url: `${dir}/products/tires-auto-express.png`,
      },
      {
        name: 'tires-auto-express-sm',
        url: `${dir}/products/tires-auto-express-sm.png`,
      },
    ];
  }

  @Input() name: string;

  public get url(): string {
    return (
      (this.images.filter((n) => n.name === (this.name || ''))[0] || {}).url ||
      ''
    );
  }
  ngOnInit(): void {}
}
