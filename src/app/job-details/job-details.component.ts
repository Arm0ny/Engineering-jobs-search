import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JobInterface} from "../interfaces/job-interface";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnChanges {
  jobId : any
  @Input() jobs! : JobInterface[]
  selectedJob : any
  constructor(private ActivatedRoute : ActivatedRoute) { }

  ngOnChanges(): void {
    this.jobId = this.ActivatedRoute.snapshot.paramMap.get('id')
    console.log(this.jobs)
    this.selectedJob = this.jobs.filter(this.jobId)

  }

}
