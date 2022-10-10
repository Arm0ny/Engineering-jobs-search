import {LocationInterface} from "./job-interface";

export interface CompanyInterface{
  id: number,
  name: string,
  description: string,
  locations :  LocationInterface[],
  size : {
    name: string,
    short_name : string
  }
}
