import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { AddTruckComponent } from './components/add-truck/add-truck.component';
import { EditTruckComponent } from './components/edit-truck/edit-truck.component';
import { EditDriverComponent } from './components/edit-driver/edit-driver.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { DriverComponent } from './components/driver/driver.component';
import { TruckComponent } from './components/truck/truck.component';
import { TruckVisualizationComponent } from './components/truck-visualization/truck-visualization.component';
import { AppRouingModule } from './/app-rouing.module';

import { ReactiveFormsModule } from '@angular/forms';


// Angularfire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { ClientService } from './services/client.service';
import { TopNavComponent } from './components/top-nav/top-nav.component';

 // Initialize Firebase
 const firebaseconfig = {
    apiKey: 'AIzaSyBe3S0xnn2K0TDDal_dhyBmcT6mxG3oMM4',
    authDomain: 'destinymovers-3eaee.firebaseapp.com',
    databaseURL: 'https://destinymovers-3eaee.firebaseio.com',
    projectId: 'destinymovers-3eaee',
    storageBucket: 'destinymovers-3eaee.appspot.com',
    messagingSenderId: '679790811575'

};

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ContentPageComponent,
    AboutComponent,
    ServicesComponent,
    DriverComponent,
    TruckComponent,
    TruckVisualizationComponent,
    AddDriverComponent,
    AddTruckComponent,
    EditDriverComponent,
    EditTruckComponent,
    TopNavComponent

  ],
  imports: [
    BrowserModule,
    AppRouingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFireAuth,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
