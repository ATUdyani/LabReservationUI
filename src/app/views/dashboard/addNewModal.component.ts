import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { LabService, LabDetail } from 'src/app/services/lab.service';
import { ReservationService } from 'src/app/services/reservation.service';
@Component({
  selector: 'modal-content',
  template: `<div class="modal-header">
    <h4 class="modal-title pull-left">{{header}}</h4>
    <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
  <input class="form-control" [(ngModel)]="model.title" #title="ngModel" id="text-input" name="text-input" placeholder="Title" type="text">
  <br>
  <ng-select  [(ngModel)]="model.selectedLabs" [items]="labNames" [multiple]="false" (change)="validate()" class="bootstrap ng-untouched ng-pristine ng-valid" placeholder="Choose your lab">
  <div class="below" tabindex="0">
    <div class="multiple">
      <input autocomplete="on" tabindex="-1" style="width: 1px;" placeholder="">
    </div>
  </div>
  </ng-select>
  <br>
  <label>Date:</label>
  <input [(ngModel)]="model.myDate" type="text"
           placeholder="Datepicker"
           class="form-control"
           (bsValueChange)="validate()"
           bsDatepicker>
           <br>
           <label>Time:</label>
           <div class="row"> 
           <div class="col-lg-5">
           <timepicker [(ngModel)]="model.myTime" (ngModelChange)="validate()" minuteStep="30" class="ng-untouched ng-valid ng-dirty">
           <table>
             <tbody>
               <tr class="text-center">
                 <td>
                   <a class="btn btn-link">
                     <span class="bs-chevron bs-chevron-up"></span>
                   </a>
                 </td>
                 <!---->
                 <td>&nbsp;&nbsp;&nbsp;</td>
                 <!---->
                 <td>
                   <a class="btn btn-link">
                     <span class="bs-chevron bs-chevron-up"></span>
                   </a>
                 </td>
                 <!---->
                 <!---->
                 <!---->
                 <td>&nbsp;&nbsp;&nbsp;</td>
                 <!---->
                 <td></td>
               </tr>
               <tr>
                 <td class="form-group">
                   <input class="form-control text-center bs-timepicker-field" maxlength="2" placeholder="HH" type="text">
                 </td>
                 <!---->
                 <td>&nbsp;:&nbsp;</td>
                 <!---->
                 <td class="form-group">
                   <input class="form-control text-center bs-timepicker-field" maxlength="2" placeholder="MM" type="text">
                 </td>
                 <!---->
                 <!---->
                 <!---->
                 <td>&nbsp;&nbsp;&nbsp;</td>
                 <!---->
                 <td>
                   <button class="btn btn-default text-center" type="button">AM </button>
                 </td>
               </tr>
               <tr class="text-center">
                 <td>
                   <a class="btn btn-link">
                     <span class="bs-chevron bs-chevron-down"></span>
                   </a>
                 </td>
                 <!---->
                 <td>&nbsp;&nbsp;&nbsp;</td>
                 <!---->
                 <td>
                   <a class="btn btn-link">
                     <span class="bs-chevron bs-chevron-down"></span>
                   </a>
                 </td>
                 <!---->
                 <!---->
                 <!---->
                 <td>&nbsp;&nbsp;&nbsp;</td>
                 <!---->
                 <td></td>
               </tr>
             </tbody>
           </table>
         </timepicker>
         </div>
         <div class="col-lg-2" style="align-text:center;margin-top:25px;">
         <h2>to</h2>
         </div>
         <div class="col-lg-5">
           <timepicker [(ngModel)]="model.myToTime" (ngModelChange)="validate()" minuteStep="30" class="ng-untouched ng-valid ng-dirty">
           <table>
             <tbody>
               <tr class="text-center">
                 <td>
                   <a class="btn btn-link">
                     <span class="bs-chevron bs-chevron-up"></span>
                   </a>
                 </td>
                 <!---->
                 <td>&nbsp;&nbsp;&nbsp;</td>
                 <!---->
                 <td>
                   <a class="btn btn-link">
                     <span class="bs-chevron bs-chevron-up"></span>
                   </a>
                 </td>
                 <!---->
                 <!---->
                 <!---->
                 <td>&nbsp;&nbsp;&nbsp;</td>
                 <!---->
                 <td></td>
               </tr>
               <tr>
                 <td class="form-group">
                   <input class="form-control text-center bs-timepicker-field" maxlength="2" placeholder="HH" type="text">
                 </td>
                 <!---->
                 <td>&nbsp;:&nbsp;</td>
                 <!---->
                 <td class="form-group">
                   <input class="form-control text-center bs-timepicker-field" maxlength="2" placeholder="MM" type="text">
                 </td>
                 <!---->
                 <!---->
                 <!---->
                 <td>&nbsp;&nbsp;&nbsp;</td>
                 <!---->
                 <td>
                   <button class="btn btn-default text-center" type="button">AM </button>
                 </td>
               </tr>
               <tr class="text-center">
                 <td>
                   <a class="btn btn-link">
                     <span class="bs-chevron bs-chevron-down"></span>
                   </a>
                 </td>
                 <!---->
                 <td>&nbsp;&nbsp;&nbsp;</td>
                 <!---->
                 <td>
                   <a class="btn btn-link">
                     <span class="bs-chevron bs-chevron-down"></span>
                   </a>
                 </td>
                 <!---->
                 <!---->
                 <!---->
                 <td>&nbsp;&nbsp;&nbsp;</td>
                 <!---->
                 <td></td>
               </tr>
             </tbody>
           </table>
         </timepicker>
         </div>
         </div>
         <br>
         <input class="form-control" [(ngModel)]="model.description" #description="ngModel"  id="text-input" name="text-input" placeholder="Description" type="text">
         <br>
         <select class="form-control" [disabled]="statusDisabled" [(ngModel)]="model.status" #status="ngModel" id="status" name="status"><option value="1">Pending</option><option value="2">Booked</option></select>
         <br>
         <pre class="alert alert-info">{{alertMessage}}</pre>
          
         <div class="card border-info">
            <div class="card-header"> Lab Detail 
            </div>
              <div class="card-body">
                Seats:{{labDetail.seat}}
                <br>
                Location:{{labDetail.location}}
              </div>
          </div>
         <div *ngIf="activateButton">
         <button class="btn btn-sm btn-danger" type="submit" style="margin-right:10px;"><i class="fa fa-dot-circle-o"></i> Delete</button>
         <button class="btn btn-sm btn-primary" type="submit"><i class="fa fa-dot-circle-o"></i> Update</button>
         </div>
         <div *ngIf="!activateButton">
         <button class="btn btn-sm btn-primary" type="submit" (click)="submit()"><i class="fa fa-dot-circle-o"></i> Add</button>
        </div>
     </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
  </div>`
})

export class AddNewModalComponent implements OnInit {
  labDetailRes;
  header: string;
  closeBtnName: string;
  model: any = {};
  labItems = Array();
  labDetail = {seats:'',location:''};
  labNames: string[] = [];
  alertMessage = "";

  constructor(public bsModalRef: BsModalRef, private labService: LabService, private reservationService: ReservationService) { }

  ngOnInit() {
    this.model.status = "1";
    this.loadLabitems();
  }
  submit() {
    var fromdate = this.model.myDate;
    var todate = new Date(this.model.myDate);
    fromdate.setHours(this.model.myTime.getHours(), this.model.myTime.getMinutes(), this.model.myTime.getSeconds());
    todate.setHours(this.model.myToTime.getHours(), this.model.myToTime.getMinutes(), this.model.myToTime.getSeconds());
    let data = {
      userId: "5b2f88450528463d14f2ba46",
      labId: this.getIdFromLab(this.model.selectedLabs),
      title : this.model.title,
      description: this.model.description,
      startDate: fromdate.toJSON(),
      endDate: todate.toJSON(),
      note: "",
      status: this.model.status 
    };
    console.log(data);
    //this.reservationService.postReservation(this.model).subscribe(res => alert(res));
  }

  validate() {
    if(this.model.myDate!= "" && this.model.myTime!="" && this.model.myToTime!="" && this.model.selectedLabs !="") {
      var fromdate = this.model.myDate;
    var todate = new Date(this.model.myDate);
    fromdate.setHours(this.model.myTime.getHours(), this.model.myTime.getMinutes(), this.model.myTime.getSeconds());
    todate.setHours(this.model.myToTime.getHours(), this.model.myToTime.getMinutes(), this.model.myToTime.getSeconds());
      var data = {
        startDate:fromdate.toJSON(),
        endDate:todate.toJSON(),
        name:this.model.selectedLabs
      }
      this.reservationService.validateReversation(data).subscribe(res=>this.updateAlert(res.success));
    }
  }
  updateAlert(success) {
    if(success) {
      this.alertMessage = "Available";
    } else {
      this.alertMessage = "Not Available";
    }
    
  }

  updateReservation() {

  }

  deleteReversation() {
    
  }

  loadLabitems() {
    this.labService.getAllLabs().subscribe(res => {
      this.labNames = res.map(a=>a.name);
      this.labItems = res;
    });
  }

  getIdFromLab(name:string) {
    console.log(name);
    console.log(this.labItems.filter(lab =>lab.name===name));
    return this.labItems.filter(lab =>lab.name===name)[0]._id;
  }

  getLabDetail(id) {
    this.labService.getLabDetail(id).subscribe(res => this.labDetail=res);
    this.labDetail.seats = this.labDetailRes.seats;
    this.labDetail.location = this.labDetailRes.location;
  }
}

