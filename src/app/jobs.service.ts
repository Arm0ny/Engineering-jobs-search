import { Injectable } from '@angular/core';
import {Observable, map, of} from "rxjs";

import {APIResponseInterface, JobInterface} from "./interfaces/job-interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CustomHttpParamsEncoder} from "./encoders/CustomHttpParamsEncoder";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private url = 'https://www.themuse.com/api/public/jobs'

  constructor(private http: HttpClient) {
  }

  getJobs(page = 1, filters = {city: 'Rome, Italy', level: ''}): Observable<APIResponseInterface>{
    const params = new HttpParams({encoder: new CustomHttpParamsEncoder()})
      .set('category', 'Science and Engineering')
      .set('page', page)
      .set('location', filters.city)
      .set('level', filters.level)
    return this.http.get<APIResponseInterface>(this.url, {params})
  }

}



