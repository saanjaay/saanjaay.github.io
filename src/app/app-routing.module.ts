import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyportfolioComponent } from './myportfolio/myportfolio.component';

const routes: Routes= [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'myportfolio', component:MyportfolioComponent}
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
