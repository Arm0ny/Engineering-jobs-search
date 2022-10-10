import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {APIResponseInterface, JobInterface} from "../interfaces/job-interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CustomHttpParamsEncoder} from "../encoders/CustomHttpParamsEncoder";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private url = 'https://www.themuse.com/api/public/jobs'

  constructor(private http: HttpClient) {
  }
  filters! : {
    page : number,
    city: string,
    level: string
  }

  setFilters(filters = {page: 1, city : 'Rome, Italy', level: ''}) : void{
    this.filters = filters
  }

  getFilters() : {}{
    return this.filters
  }

  getJobs(): Observable<APIResponseInterface>{
    const params = new HttpParams({encoder: new CustomHttpParamsEncoder()})
      .set('category', 'Science and Engineering')
      .set('page', this.filters.page)
      .set('location', this.filters.city)
      .set('level', this.filters.level)
    return this.http.get<APIResponseInterface>(this.url, {params})
  }

  getJobById(id: string | null){
    return this.http.get<JobInterface>(`${this.url}/${id}`)
  }

}



