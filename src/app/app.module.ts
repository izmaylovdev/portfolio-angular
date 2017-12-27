import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WorksPageComponent } from './components/works-page/works-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';

import { AgmCoreModule } from '@agm/core';


// material modules
import {
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatTooltipModule
} from '@angular/material';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    WorksPageComponent,
    HomePageComponent,
    ContactsPageComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAdHz2oxEuk2KacNBIViBar64cy1fuQuw'
    })
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
