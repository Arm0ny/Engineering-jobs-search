import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {JobsService} from "../../services/jobs.service";
import {JobInterface, LocationInterface} from "../../interfaces/job-interface";
import {Input} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-job-cards',
  templateUrl: './job-cards.component.html',
  styleUrls: ['./job-cards.component.css']
})
export class JobCardsComponent implements OnInit, OnChanges, OnDestroy{

  constructor(private jobsService : JobsService, private route : ActivatedRoute) { }

  subscription? : Subscription
  jobs! : JobInterface[]
  @Input() filters : {
    page: 1;
    city: string;
    level: string;
  } | undefined


  jobId : any

  ngOnChanges(changes: SimpleChanges) {
    this.getJobs()
  }

  ngOnInit(): void {
    this.getJobs()
    }

   ngOnDestroy() {
    this.subscription?.unsubscribe()
   }

  getJobs(): void {
    this.subscription = this.jobsService.getJobs()
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

}
