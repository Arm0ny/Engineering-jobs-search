import {CompanyInterface} from "./companies-interface";


export interface APIResponseInterface {
  page?: number,
  page_count?: number,
  items_per_page?: number,
  took?: number,
  timed_out?: boolean,
  total?: number,
  results: Array<JobInterface>,
}


export interface JobInterface {
  contents: string,
  name: string,
  publication_date?: string,
  id : number,
  locations?: LocationInterface[],
  levels: LevelsInterface[],
  company: CompanyInterface,

}

export interface LocationInterface{
  name: string
}

export interface LevelsInterface{
  name: string,
  short_name?: string
}


