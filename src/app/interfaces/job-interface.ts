

export interface APIResponseInterface {
  page?: number,
  page_count?: number,
  items_per_page?: number,
  took?: number,
  timed_out?: boolean,
  total?: number,
  results: Array<JobInterface>
}


export interface JobInterface {
  contents?: string,
  name?: string,
  type?: string,
  publication_date?: string,
  short_name?: string,
  model_type?: string;
  id? : number,
  locations?: LocationInterface[],
  levels?: LevelsInterface[],
  company?: {
    name : string
  },
}

export interface LocationInterface{
  name: string
}

export interface LevelsInterface{
  name: string,
  short_name?: string
}


