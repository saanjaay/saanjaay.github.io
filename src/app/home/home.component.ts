import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function() {
    setTimeout(function() { $("#welcome").slideToggle("fast") }, 2000)
      })
    $(function() {
        setTimeout(function() { $("#profilephoto").show }, 2000)
          })
  }
  

}
