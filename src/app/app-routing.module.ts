import { CountryListComponent } from './countries/component/pages/country-list/country-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './countries/component/pages/regions/regions.component';

const routes: Routes = [
  {
    path:'countries',
    component: CountryListComponent,
  },
  {
    path:'countries/:name',
    component: CountryListComponent,
  },

  {
    path:'',
    component: RegionsComponent,



  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
