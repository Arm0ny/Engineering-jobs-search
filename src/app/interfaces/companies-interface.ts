import {LocationInterface} from "./job-interface";

export interface CompanyInterface{
  name?: string,
  description: string,
  locations :  LocationInterface[],
  size : {
    name: string,
    short_name : string
  }
}
