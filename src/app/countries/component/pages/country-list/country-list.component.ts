import { CountryDetailComponent } from './../../country-detail/country-detail.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country';
import { CountryService } from 'src/app/countries/services/country.service';
import {ActivatedRoute, TitleStrategy} from "@angular/router"
import {MatDialog} from "@angular/material/dialog"

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnChanges {
  back_="true"


  private _countries:Country[]=[]
  dataSource=this.countries
  displayedColumns:string[]=['name','capital','flag','link']
  get countries():Country[]{
    return this._countries
  }

  @Input()
  set countries(value:Country[]){
    this._countries=value;
  }
 ;

  @Input() region:string=''

  activeRegion:string='';
  @Input() activeStr:any;

  constructor(public dialog:MatDialog) {}



  toDetail({ country }: { country: Country; }): void{
    console.log(country.name.common)
  }

  openDialog(country:Country){
    let dialogRef=this.dialog.open(CountryDetailComponent,{data:{country:country}});
    dialogRef.afterClosed().subscribe(result=>{

    })

  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("test")
    console.log(changes)
      console.log(this.countries)
  }

}
