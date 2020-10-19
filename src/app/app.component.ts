import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(){
    let username : string = localStorage.getItem('username');

    if(username != undefined && username != null && username != ""){
      this.router.navigateByUrl('countries-list');
    }
    else {
      this.router.navigateByUrl('login');
    }
  }

}
