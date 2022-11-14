import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/app/countries/interfaces/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
item: any;
  // @Input() countyItem: Country | undefined;
  constructor(@Inject(MAT_DIALOG_DATA) public data:{country:Country}) { }

  ngOnInit(): void {
  }

}
