import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import {MaterialModule} from '@buypart/material';
export const ROUTES: Routes = [{ path: '', component: HomeComponent }];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HomeModule { }
