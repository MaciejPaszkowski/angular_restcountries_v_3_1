import { CountryService } from './../../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country';

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


  constructor(private countryService: CountryService) {}
  getClassCss(region:string):string{
    return (region===this.activeRegion)?'btn btn-primary text-capitalize':'btn btn text-capitalize'
  }

  activateRegion(region:string){
    if(region===this.activeRegion){
      return;
    }
    this.activeRegion=region;
    this.countries=[];

    this.countryService.getRegion(region)
    .subscribe((countries)=>{
      this.countries=countries
    })
    console.log(this.countries[0])
    console.log('cos napisze')

  }

  ngOnInit(): void {
    this.activateRegion(this.regions[0])
    // console.log(this.countries)
    console.log(this.countries[0])

  }
}
