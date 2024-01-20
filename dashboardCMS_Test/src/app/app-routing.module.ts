import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//rout components:
import { ViewLoginComponent } from './login/view/view-login.component';
import { ViewDashboardComponent } from './dashboard/view/view-dashboard.component';
import { SelectedViewComponent } from './dashboard/components/selected-view/selected-view.component';
import { HomeComponent } from './dashboard/components/home/home.component';
import { GuardServiceService } from './core/service/guard-service.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: ViewLoginComponent},
  { path: 'dashboard',
    component: ViewDashboardComponent,
    canActivate: [GuardServiceService],
    children: [
      { path: '', component: HomeComponent },
      { path: ':title', component: SelectedViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
