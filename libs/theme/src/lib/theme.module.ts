import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MaterialModule } from '@buypart/material';
import { FooterComponent } from './footer/footer.component';
import { IconComponent } from './icon/icon.component';
import { ProductComponent } from './product/product.component';
import { ProductPremComponent } from './product-prem/product-prem.component';
import { ImageComponent } from './image/image.component';
import { QuantityComponent } from './quantity/quantity.component';
import { FilterNavComponent } from './filter-nav/filter-nav.component';
@NgModule({
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule, MaterialModule],
  declarations: [
    MainLayoutComponent,
    TopNavComponent,
    FooterComponent,
    IconComponent,
    ProductComponent,
    ProductPremComponent,
    ImageComponent,
    QuantityComponent,
    FilterNavComponent,
  ],
  exports: [
    QuantityComponent,
    MainLayoutComponent,
    IconComponent,
    ProductComponent,
    ProductPremComponent,
    ImageComponent,
    FilterNavComponent
  ],
})
export class ThemeModule {}


