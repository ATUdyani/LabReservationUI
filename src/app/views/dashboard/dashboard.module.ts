import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {TimepickerModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    NgSelectModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
