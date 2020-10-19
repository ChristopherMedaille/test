import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  public username: string ;

  Login(){
    if(this.username != "" && this.username != undefined && this.username!= null){
      localStorage.setItem("username",this.username);
      this.router.navigateByUrl('countries-list');
    }
  }

}
