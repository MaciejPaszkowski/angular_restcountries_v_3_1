import { Country } from 'src/app/countries/interfaces/country';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-county-list-item',
  templateUrl: './county-list-item.component.html',
  styleUrls: ['./county-list-item.component.scss']
})
export class CountyListItemComponent implements OnChanges {

  @Input() countyItem: Country | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.countyItem)
  }

}
