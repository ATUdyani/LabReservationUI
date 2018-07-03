import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import {AddNewModalComponent} from './addNewModal.component';
import { ReservationService } from 'src/app/services/reservation.service';
import { Observable } from 'rxjs/internal/Observable';
import { LabService } from 'src/app/services/lab.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  labItems: any;
  labNames: any;
  bsModalRef: BsModalRef;
  reservationData: Array<any> = [];
  model: any = {};
  constructor(private modalService: BsModalService, private reservationService: ReservationService, private labService:LabService, private userService:UserService) {

  }
  ngOnInit(): void {
    this.init();
    this.loadLabitems();
  }
  init() {
    this.reservationService.getAllReservations().subscribe(res => this.reservationData = res);
  }

  editModelWithComponent(event) {
    console.log(event.currentTarget.id);
    const initialState = {
      header: 'Edit Reservation',
      activateButton:true
    };
    this.bsModalRef = this.modalService.show(AddNewModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.needToValidate = false;
    this.bsModalRef.content.isDisabled = true;
    var modelObj = this.getReservationDetail(event.currentTarget.id);
    var model = {
      id: modelObj._id,
      title: modelObj.title,
      selectedLabs: modelObj.labId.name,
      myDate:new Date(modelObj.startDate),
      myTime:new Date(modelObj.startDate),
      myToTime:new Date(modelObj.endDate),
      description:modelObj.description,
      status: modelObj.status
    };
    this.bsModalRef.content.model = model;
  }

  filter() {
    var searchDate = new Date();
    var labName = "";
    var searchDateP;
    if(this.model.myDate != null) {
      searchDate = new Date(this.model.myDate);
    }

    if(this.model.myTime != null) {
      searchDate.setHours(this.model.myTime.getHours(), this.model.myTime.getMinutes(), this.model.myTime.getSeconds());
    }

    if(this.model.selectedLabs != null) {
      labName = this.model.selectedLabs;
    }
    if(this.model.myTime == null && this.model.myDate == null){
      searchDateP = null;
    } else {
      searchDateP = searchDate.getTime();
    }
    console.log({startDate:searchDateP, labId:this.getIdFromLab(labName)});
    this.reservationService.searchReservation({startDate:searchDateP, labId:this.getIdFromLab(labName)}).subscribe(res => this.reservationData = res);


  }

  openModalWithComponent() {
    const initialState = {
      header: 'New Reservation',
      statusDisabled:true
    };
    this.bsModalRef = this.modalService.show(AddNewModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.needToValidate = true;
    this.bsModalRef.content.model.status = "pending";
  }

  loadLabitems() {
    this.labService.getAllLabs().subscribe(res => {
      this.labNames = res.map(a=>a.name);
      this.labItems = res;
    });
  }

  getIdFromLab(name:string) {
    if(name != ""){
      console.log(this.labItems.filter(lab =>lab.name===name));
      return this.labItems.filter(lab =>lab.name===name)[0]._id;
    } else {
      return "";
    }
    
  }

  getReservationDetail(id) {
    var item = this.reservationData.filter(rev => rev._id === id);
    if (item) {
      console.log(item[0]);
      return item[0];
    }
    return {};
  }

  isCheckAuthorize(id) {
    if (this.userService.getUser().type == "Admin" || this.userService.getUser()._id == id) {
      return true;
    }
    return false;
  }
}
