import { Component, OnInit } from '@angular/core';
import {JobsService} from "../jobs.service";
import {JobInterface} from "../interfaces/job-interface";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public jobs!: JobInterface[]
  filters!: {
    city: string,
    level: string
  }
  constructor(
    private jobsService: JobsService
  ) {
  }

  ngOnInit() {
    this.getJobs()
  }


  getJobs(page = 1, filters = {city: 'Rome, Italy', level: ''}): void {
    this.jobsService.getJobs(page, filters)
      .subscribe((response) => {
        this.jobs = response.results.map(job => ({
            id: job.id,
            contents: job.contents,
            name: job.name,
            publication_date: job.publication_date,
            locations: job.locations,
            levels: job.levels,
            company: job.company

          })
        )
      })
  }

  getFilteredResults($event: { city: string; level: string; } | undefined){
    this.getJobs(undefined, $event)
  }
}
