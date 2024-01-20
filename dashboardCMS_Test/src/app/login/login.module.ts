import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Afegim el Routing
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule } from '@angular/forms';
import { ViewLoginComponent } from './view/view-login.component';



@NgModule({
  declarations: [
    ViewLoginComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
