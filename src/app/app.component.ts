import {Component, OnInit} from '@angular/core';
import {JobsService} from "./jobs.service";
import {JobInterface} from "./interfaces/job-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Engineering-jobs-search';
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
            contents: job.contents,
            name: job.name,
            publication_date: job.publication_date,
            locations: job.locations,
            level: job.level,
            company: job.company

          })
        )
      })
  }

  getFilteredResults($event: { city: string; level: string; } | undefined){
    this.getJobs(undefined, $event)
  }
}

