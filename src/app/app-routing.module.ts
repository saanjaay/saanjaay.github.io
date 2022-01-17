import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExpComponent } from './exp/exp.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetcoursesComponent } from './getcourses/getcourses.component';

const routes: Routes= [
  {path:'contactus', component:ExpComponent},
  {path:'home', component:HomeComponent},
  {path:'getcourses',component:GetcoursesComponent}
 ]
@NgModule({
  declarations: [],
  imports: [  
    CommonModule,
    RouterModule.forRoot(routes)
  ],  
  exports: [RouterModule]
})  
export class AppRoutingModule { }
