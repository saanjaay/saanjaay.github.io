import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myportfolio'; 
  welcomeflag: any;

  ngOnInit(): void {

    this.welcomeflag =  sessionStorage.getItem("popState") === null;

    $(function() {
      if( sessionStorage.getItem("popState") === null){
        setTimeout(function() { $("#welcome").slideToggle("fast") }, 2000)
        sessionStorage.setItem('popState','shown')
    }
        })
        
  
}
}
