import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { LabService } from 'src/app/services/lab.service';
@Component({
  selector: 'modal-content',
  template: `<div class="modal-header">
    <h4 class="modal-title pull-left">{{title}}</h4>
    <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
  <input class="form-control" [(ngModel)]="model.title" #title="ngModel" id="text-input" name="text-input" placeholder="Title" type="text">
  <br>
  <ng-select  [(ngModel)]="modelselectedLabs" [items]="labItems" [multiple]="false" (change)="validate()" class="bootstrap ng-untouched ng-pristine ng-valid" placeholder="Choose your lab">
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
           <timepicker [(ngModel)]="model.myTime" (ngModelChange)="validate()" class="ng-untouched ng-valid ng-dirty">
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
         <br>
         <input class="form-control" [(ngModel)]="model.description" #description="ngModel"  id="text-input" name="text-input" placeholder="Description" type="text">
         <br>
         <select class="form-control" [(ngModel)]="model.status" #status="ngModel" id="status" name="status"><option value="1">Pending</option><option value="2">Booked</option></select>
         <br>
         <pre class="alert alert-info">Available</pre>
          
         <div class="card border-info">
            <div class="card-header"> Lab Detail 
            </div>
              <div class="card-body">
                Seats:
                <br>
                Location:
              </div>
          </div>
         <div *ngIf="false">
         <button class="btn btn-sm btn-danger" type="submit" style="margin-right:10px;"><i class="fa fa-dot-circle-o"></i> Delete</button>
         <button class="btn btn-sm btn-primary" type="submit"><i class="fa fa-dot-circle-o"></i> Update</button>
         </div>
         <button class="btn btn-sm btn-primary" type="submit" (click)="submit()"><i class="fa fa-dot-circle-o"></i> Add</button>
    </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
  </div>`
})

export class AddNewModalComponent implements OnInit {
  title: string;
  closeBtnName: string;
  model: any = {};
  labItems = [];

  constructor(public bsModalRef: BsModalRef, private labService: LabService) { }

  ngOnInit() {
  }
  submit() {
    console.log(this.model);
  }

  validate() {
    if(this.model.myDate!= "" && this.model.myTime!="" && this.model.modelselectedLabs !="") {

    }
  }

  updateReservation() {

  }

  deleteReversation() {
    
  }
}
