import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {CONSTANTS} from '../app.constant';
import {map, catchError} from 'rxjs/operators';
import { Observable } from "rxjs";


@Injectable()
export class LabService {
  handleError(arg0: any): any {
   console.log(arg0);
  }
  constructor(
    private http: HttpClient
  ) {}

  getAllLabs():Observable<any> {
    return this.http.get(`/api/labs`).pipe(map((res) => {
        return res;
      }),catchError(this.handleError));
  }

  getLabDetail(id:string){
    return this.http.get(`/api/labs/`+id).pipe(map((res) => {
        return res;
      }),catchError(this.handleError));
  }

}