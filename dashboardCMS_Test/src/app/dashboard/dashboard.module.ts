import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { AppRoutingModule } from '../app-routing.module';

//components
import { ViewDashboardComponent } from './view/view-dashboard.component';
import { SelectedViewComponent } from './components/selected-view/selected-view.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    ViewDashboardComponent,
    SelectedViewComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
  ]
})
export class DashboardModule { }
