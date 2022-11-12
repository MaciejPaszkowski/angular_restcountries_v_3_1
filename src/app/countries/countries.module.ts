import { RouterModule } from '@angular/router';
import { RegionsComponent } from './component/pages/regions/regions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RegionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CountriesModule { }
