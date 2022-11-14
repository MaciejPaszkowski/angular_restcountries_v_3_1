import { MaterialModule } from './../material-module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { RegionsComponent } from './component/pages/regions/regions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './component/pages/country-list/country-list.component';
import { RegionComponent } from "./component/region/region.component"
import { CountryDetailComponent } from './component/country-detail/country-detail.component';
import { CountyListItemComponent } from './component/county-list-item/county-list-item.component';
import { AboutComponent } from './component/pages/about/about.component';

const MateriaComponents=[
  MatButtonModule,

]

@NgModule({
  declarations: [
    RegionsComponent,
    CountryListComponent,
    RegionComponent,
    CountryDetailComponent,
    CountyListItemComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class CountriesModule { }
