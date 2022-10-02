import { Component, OnInit } from '@angular/core';
import {JobsService} from "../jobs.service";
import {JobInterface, LocationInterface} from "../interfaces/job-interface";


@Component({
  selector: 'app-job-cards',
  templateUrl: './job-cards.component.html',
  styleUrls: ['./job-cards.component.css']
})
export class JobCardsComponent implements OnInit {

  constructor(private jobsService : JobsService) { }

  jobs : JobInterface[] = []

  ngOnInit(): void {
    this.getJobs(1)

  }

  getJobs(page: number): void {
    this.jobsService.getJobs(page)
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

}
