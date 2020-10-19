import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  public country : any

  ngOnInit(): void {
    this.country = window.history.state.country;
    if(this.country != null && this.country != undefined && this.country != ""){
      console.log(this.country);
    }
  }

  OpenCountriesList(){
    this.router.navigateByUrl('countries-list');
  }

}
