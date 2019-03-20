import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyInfoComponent } from './agency-info/agency-info.component';
import { HospitalInfoComponent } from './hospital-info/hospital-info.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AgencyInfoComponent,
    HospitalInfoComponent,
    NotFoundPageComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
