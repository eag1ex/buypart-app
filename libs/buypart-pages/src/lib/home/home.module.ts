import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '@buypart/material';
import { ThemeModule } from '@buypart/theme';
import { DragScrollModule } from 'ngx-drag-scroll';
export const ROUTES: Routes = [{ path: '', component: HomeComponent }];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    DragScrollModule,
    ThemeModule,
    ReactiveFormsModule,
  //  FormsModule,
    MaterialModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HomeModule { }
