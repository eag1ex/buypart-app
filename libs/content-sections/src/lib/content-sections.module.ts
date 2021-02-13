import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class ContentSectionsModule {}
