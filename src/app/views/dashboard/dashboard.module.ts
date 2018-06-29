import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {TimepickerModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { DashboardComponent } from './dashboard.component';
import {AddNewModalComponent} from './addNewModal.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ReservationService } from '../../services/reservation.service';
import { LabService } from '../../services/lab.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    NgSelectModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [ DashboardComponent ],
  providers: [BsModalService, ReservationService, LabService ]
})
export class DashboardModule { }
