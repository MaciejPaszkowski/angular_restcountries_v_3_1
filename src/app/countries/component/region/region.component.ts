
import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})

export class RegionComponent implements OnInit {
  @Input() region:string=''
  @Input() name:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
