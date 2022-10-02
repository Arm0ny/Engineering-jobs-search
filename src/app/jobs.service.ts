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
  jobs! : JobInterface[]

  constructor(private http: HttpClient) {
  }

  getJobs(page: number, city: string = 'Milano, italy'): Observable<APIResponseInterface>{
    const params = new HttpParams({encoder: new CustomHttpParamsEncoder()})
      .set('category', 'Science and Engineering')
      .set('location', city)
      .set('page', page)
    return this.http.get<APIResponseInterface>(this.url, {params})
  }

}



