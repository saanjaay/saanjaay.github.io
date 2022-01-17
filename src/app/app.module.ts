import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpComponent } from './exp/exp.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GetcoursesComponent } from './getcourses/getcourses.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    HomeComponent,
    GetcoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
