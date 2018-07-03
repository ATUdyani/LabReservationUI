import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { LabService, LabDetail } from 'src/app/services/lab.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'modal-content',
  template: `<div class="modal-header">
    <h4 class="modal-title pull-left">{{header}}</h4>
    <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
  <pre *ngIf="formvalidAlert" class="alert alert-info">{{formvalidAlertMessage}}</pre>
  <div *ngIf="hideContent">
  <input class="form-control" [(ngModel)]="model.title" #title="ngModel" id="text-input" name="text-input" placeholder="Title" type="text">
  <br>
  <ng-select [disabled]="isDisabled"  [(ngModel)]="model.selectedLabs" [items]="labNames" [multiple]="false" (change)="validate()" class="bootstrap ng-untouched ng-pristine ng-valid" placeholder="Choose your lab">
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
           [disabled]="isDisabled"
           (bsValueChange)="validate()"
           bsDatepicker>
           <br>
           <label>Time:</label>
           <div class="row"> 
           <div class="col-lg-5">
           <timepicker [disabled]="isDisabled" [(ngModel)]="model.myTime" (ngModelChange)="validate()" minuteStep="30" class="ng-untouched ng-valid ng-dirty">
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
           <timepicker [disabled]="isDisabled" [(ngModel)]="model.myToTime" (ngModelChange)="validate()" minuteStep="30" class="ng-untouched ng-valid ng-dirty">
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
         <pre *ngIf="alertFlag" class="alert alert-info">{{alertMessage}}</pre>
         <div class="alert alert-danger" *ngIf="invalid">Invalid time</div>
         <br>
         <input class="form-control" [(ngModel)]="model.description" #description="ngModel"  id="text-input" name="text-input" placeholder="Description" type="text">
         <br>
         <select class="form-control" [disabled]="statusDisabled" [(ngModel)]="model.status" #status="ngModel" id="status" name="status"><option value="pending">Pending</option><option value="booked">Booked</option></select>
         <br>
          
         <div class="card border-info" *ngIf="!isDisabled">
            <div class="card-header"> Lab Detail 
            </div>
              <div class="card-body">
                Seats: {{labDetail.seats}}
                <br>
                Location: {{labDetail.location}}
              </div>
          </div>
         <div *ngIf="activateButton">
         <button class="btn btn-sm btn-danger" (click)="deleteReversation()" type="submit" style="margin-right:10px;"><i class="fa fa-dot-circle-o"></i> Delete</button>
         <button class="btn btn-sm btn-primary" (click)="updateReservation()" type="submit"><i class="fa fa-dot-circle-o"></i> Update</button>
         </div>
         <div *ngIf="!activateButton">
         <button class="btn btn-sm btn-primary" [disabled]="validform" type="submit" (click)="submit()"><i class="fa fa-dot-circle-o"></i> Add</button>
        </div>
        </div>
     </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
  </div>`
})

export class AddNewModalComponent implements OnInit {
  hideContent:boolean = true;
  isDisabled= false;
  needToValidate: boolean;
  labDetailRes;
  header: string;
  closeBtnName: string;
  model: any = {};
  labItems = Array();
  labDetail = {seats:'',location:''};
  labNames: string[] = [];
  alertMessage = "";
  alertFlag= false;
  invalid = false;
  validform=true;
  formvalidAlert=false;
  formvalidAlertMessage= "";

  constructor(public bsModalRef: BsModalRef, private labService: LabService, private reservationService: ReservationService, private userService:UserService) { }

  ngOnInit() {
    this.loadLabitems();
  }
  
  submit() {
    var fromdate = new Date(this.model.myDate);
    var todate = new Date(this.model.myDate);
    fromdate.setHours(this.model.myTime.getHours(), this.model.myTime.getMinutes(), this.model.myTime.getSeconds());
    todate.setHours(this.model.myToTime.getHours(), this.model.myToTime.getMinutes(), this.model.myToTime.getSeconds());
    let data = {
      userId: this.userService.getUser()._id,
      labId: this.getIdFromLab(this.model.selectedLabs),
      title : this.model.title,
      description: this.model.description,
      startDate: fromdate.getTime(),
      endDate: todate.getTime(),
      note: "",
      status: this.model.status 
    };
    if(this.model.title!=null){
      this.reservationService.postReservation(data).subscribe(res => {
        this.formvalidAlert = true;
        this.formvalidAlertMessage ="Successfully Created";
      });
    } else {
      this.formvalidAlert = true;
      this.formvalidAlertMessage = "Need to fill Title";
    }
    console.log(data);
  }

  validate() {
    if(this.needToValidate) {
    if(this.model.selectedLabs !=null) {
      this.displayLabInfo();
    }
    if(this.model.myDate!= null && this.model.myTime!= null && this.model.myToTime!=null && this.model.selectedLabs !=null) {
    var fromdate = new Date(this.model.myDate);
    var todate = new Date(this.model.myDate);
    fromdate.setHours(this.model.myTime.getHours(), this.model.myTime.getMinutes(), this.model.myTime.getSeconds());
    todate.setHours(this.model.myToTime.getHours(), this.model.myToTime.getMinutes(), this.model.myToTime.getSeconds());
      var data = {
        startDate:fromdate.getTime(),
        endDate:todate.getTime(),
        labId:this.getIdFromLab(this.model.selectedLabs)
      }
      if(todate.getTime() !== fromdate.getTime()){
        this.invalid = false;
        this.reservationService.validateReversation(data).subscribe(res=>this.updateAlert(res));
      } else {
        this.invalid = true;
      }
    }
  }
  }
  updateAlert(success) {
    this.alertFlag = true;
    this.invalid = false;
    if(success== 0) {
      this.validform = false;
      this.alertMessage = "Available";
    } else {
      this.validform = true;
      this.alertMessage = "Not Available";
    }
    
  }

  updateReservation() {
    let data = {
      id: this.model.id,
      title: this.model.title,
      description: this.model.description,
      status: this.model.status
    };
    this.reservationService.updateReservation(data).subscribe(res=>{
      this.formvalidAlert = true;
      this.formvalidAlertMessage ="Successfully Updated";
    });
  }

  deleteReversation() {
    this.reservationService.deleteReservation(this.model.id).subscribe(res=>{
      this.formvalidAlert = true;
      this.formvalidAlertMessage ="Successfully Deleted";
      this.hideContent = false;
    });
  }

  loadLabitems() {
    this.labService.getAllLabs().subscribe(res => {
      this.labNames = res.map(a=>a.name);
      this.labItems = res;
    });
  }

  getIdFromLab(name:string) {
    console.log(this.labItems.filter(lab =>lab.name===name));
    return this.labItems.filter(lab =>lab.name===name)[0]._id;
  }

  displayLabInfo() {
    var id = this.getIdFromLab(this.model.selectedLabs);
    console.log(id);
    this.getLabDetail(id);
  }

  getLabDetail(id) {
    this.labService.getLabDetail(id).subscribe(res => {
      this.labDetail.seats = res.seats;
      this.labDetail.location = res.location;
    });
    
  }
}

