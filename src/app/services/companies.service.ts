import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CompanyInterface} from "../interfaces/companies-interface";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private url = ' https://www.themuse.com/api/public/companies/'
  constructor(private http : HttpClient) { }

  getCompanyDetails(id : number) : Observable<CompanyInterface>{
    return this.http.get<CompanyInterface>(this.url + id)
  }
}
