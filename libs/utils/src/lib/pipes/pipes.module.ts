import { NgModule } from '@angular/core';
import {  SortByRating } from './sort-by.pipe';

@NgModule({
  declarations: [SortByRating],
  exports: [SortByRating]
})
export class PipesModule {}
