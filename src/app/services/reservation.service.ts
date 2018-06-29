import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {CONSTANTS} from '../app.constant';
import {map, catchError} from 'rxjs/operators';
import { Observable } from "rxjs";


@Injectable()
export class ReservationService {
  handleError(arg0: any): any {
   console.log(arg0);
  }
  constructor(
    private http: HttpClient
  ) {}

  getAllReservations():Observable<any> {
    return this.http.get(`/api/labreservations`).pipe(map((res) => {
        return res;
      }),catchError(this.handleError));
  }

  validateReversation() {
    return this.http.get(`/api/validatereservation`).pipe(map((res) => {
      return res;
    }),catchError(this.handleError));
  }

  postReservation(data) {
    return this.http.post(`/api/labreservation`, data).pipe(map((res) => {
      return res;
    }),catchError(this.handleError));
  }

  updateReservation(data) {
    return this.http.put(`/api/labreservation`, data).pipe(map((res) => {
      return res;
    }),catchError(this.handleError));
  }

  deleteReservation(id) {
    return this.http.delete(`/api/labreservation/`+id).pipe(map((res) => {
      return res;
    }),catchError(this.handleError));
  }

}