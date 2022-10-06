import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JobsService} from "../jobs.service";
import {JobInterface} from "../interfaces/job-interface";

@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.css']
})
export class JobsDetailsComponent implements OnInit {

  constructor(private jobsService : JobsService, private route : ActivatedRoute) { }
  jobId : any
  selectedJob? : any
  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id')
    this.getSelectedJob()

  }

  getSelectedJob(){
    this.jobsService.getJobById(this.jobId)
      .subscribe(response => {
        this.selectedJob = response
      })
  }


}
