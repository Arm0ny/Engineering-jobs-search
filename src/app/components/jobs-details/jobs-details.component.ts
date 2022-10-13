import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JobsService} from "../../services/jobs.service";
import {Subscription} from "rxjs";
import {JobInterface} from "../../interfaces/job-interface";


@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.css']
})
export class JobsDetailsComponent implements OnInit, OnDestroy {

  constructor(private jobsService : JobsService, private route : ActivatedRoute) { }
  jobId: string | null = ''
  selectedJob? : JobInterface
  showCompanyDetails: boolean = false;

  subscription! : Subscription
  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id')
    this.getSelectedJob()

  }

  getSelectedJob(){
    this.subscription = this.jobsService.getJobById(this.jobId)
      .subscribe(response => {
        this.selectedJob = response
      })
  }


  onClick() {
    this.showCompanyDetails = !this.showCompanyDetails
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
