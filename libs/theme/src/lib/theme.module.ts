import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MaterialModule } from '@buypart/material';
import { FooterComponent } from './footer/footer.component';
import { IconComponent } from './icon/icon.component';
import { ProductComponent } from './product/product.component';
import { ProductPremComponent } from './product-prem/product-prem.component';
import { ImageComponent } from './image/image.component';
@NgModule({
  imports: [RouterModule, CommonModule, MaterialModule],
  declarations: [
    MainLayoutComponent,
    TopNavComponent,
    FooterComponent,
    IconComponent,
    ProductComponent,
    ProductPremComponent,
    ImageComponent,
  ],
  exports: [
    MainLayoutComponent,
    IconComponent,
    ProductComponent,
    ProductPremComponent,
    ImageComponent
  ],
})
export class ThemeModule {}
