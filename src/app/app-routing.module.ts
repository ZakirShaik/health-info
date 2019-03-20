import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { AgencyInfoComponent } from './agency-info/agency-info.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'agency-info', component: AgencyInfoComponent },
  { path: 'hospital-info', component: HospitalInfoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
