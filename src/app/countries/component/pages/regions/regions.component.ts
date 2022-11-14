import { AboutComponent } from './../about/about.component';
import { Router } from '@angular/router';
import { CountryService } from './../../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country';
import { Output, EventEmitter } from '@angular/core';

import {MatDialog} from "@angular/material/dialog"

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regiony: string[]=['Afryka', 'Ameryka', 'Azja','Europa','Oceania'];
  countries: Country[]=[];
  activeRegion:string='';
  back_=""
  activeMain:boolean=true;
  activeCountries:boolean=false;

  @Output() backButtonEvent = new EventEmitter<string>();


  backButtonClick(value:string){
    this.backButtonEvent.emit(value);

  }

  constructor(private countryService: CountryService, private router:Router, public dialog:MatDialog) {}


  getClassCss(region:string):string{
    return (region===this.activeRegion)?'btn btn-primary text-capitalize':'btn btn text-capitalize'

  //  return (region===this.activeRegion)?'mat-raised-button':'mat-flat-button'
  }


  backButton(part:string){
    if (part==='countries'){
      this.activeMain=true
      this.activeCountries=false
      this.back_=""
    }
  }

  activateRegion(region:string){
    if(region===this.activeRegion){
      this.activeMain=false
    this.activeCountries=true
    this.back_="countries"
      return;
    }
    this.activeRegion=region;
    this.countries=[];

    this.countryService.getRegion(region)
    .subscribe((countries)=>{
      this.countries=countries
    })
    this.activeMain=false
    this.activeCountries=true
    this.back_="countries"





  }


  openDialog(){
    let dialogRef=this.dialog.open(AboutComponent);
    dialogRef.afterClosed().subscribe(result=>{

    })

  }

  ngOnInit(

  ): void {
    // this.activateRegion(this.regions[0])
    // console.log(this.countries)
    // console.log(this.countries[0])

    this.back_=''


  }
}
