import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExpComponent } from './exp/exp.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes= [
  {path:'exp', component:ExpComponent}
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
