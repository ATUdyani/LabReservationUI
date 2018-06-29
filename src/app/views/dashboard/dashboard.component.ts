import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import {AddNewModalComponent} from './addNewModal.component';
import { ReservationService } from 'src/app/services/reservation.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  bsModalRef: BsModalRef;
  reservationData: Array<any> = [];
  constructor(private modalService: BsModalService, private reservationService: ReservationService) {

  }
  ngOnInit(): void {
    this.reservationService.getAllReservations().subscribe(res => this.reservationData = res);
  }
  openModalWithComponent() {
    const initialState = {
      title: 'New Reservation'
    };
    this.bsModalRef = this.modalService.show(AddNewModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }


}
