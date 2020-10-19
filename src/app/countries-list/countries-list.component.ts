import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  constructor(private http : HttpClient,
              private router: Router) { }

  private apiURL : string = "https://restcountries.eu/rest/v2/all"
  public displayedColumns: string[] = ['position', 'name', 'capital', 'region'];
  public countriesDatas : MatTableDataSource<any> = new MatTableDataSource();
  public username : string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.http.get(this.apiURL).subscribe((data:any)=>{
      // this.countriesDatas = data;
      this.countriesDatas = new MatTableDataSource(data);
      this.countriesDatas.paginator = this.paginator;
      this.countriesDatas.filterPredicate = (data: any, filter: string) => {
        //  return data.name == filter;
        return data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) >= 0;
       };
    });
  }
  
  applyFilter(filterValue: string) {
     this.countriesDatas.filter = filterValue.trim().toLowerCase();
  }

  OpenCountryDetails(country: any){
    this.router.navigate(['/country-details'], {state: { country: country}});
  }

  Logout(){
    localStorage.removeItem("username");
    this.router.navigateByUrl('login');
  }

}
