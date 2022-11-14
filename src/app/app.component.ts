import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-countries';
  back_="tt"



  clickBackButton(newReturn:string){
    this.back_=newReturn;
  }


  ngOnInit(): void {
    this.back_="/region"
    console.log(this.back_)
  }
}
