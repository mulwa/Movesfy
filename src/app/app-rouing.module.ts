import { TopNavComponent } from './components/top-nav/top-nav.component';
import { AddTruckComponent } from './components/add-truck/add-truck.component';
import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { DriverComponent } from './components/driver/driver.component';
import { ServicesComponent } from './components/services/services.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TruckComponent } from './components/truck/truck.component';
import { TruckVisualizationComponent } from './components/truck-visualization/truck-visualization.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'services', component:  ServicesComponent},
  { path: 'driverDashboard', component: DriverComponent},
  { path: 'add-driver', component: AddDriverComponent},
  { path: 'truckDashboard', component: TruckComponent},
  { path: 'add-truck', component: AddTruckComponent},
  { path: 'truckMonitoring', component: TruckVisualizationComponent}

];

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouingModule { }
