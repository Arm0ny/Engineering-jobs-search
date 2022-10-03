import { Component, OnInit } from '@angular/core';
import {JobsService} from "../jobs.service";
import {JobInterface, LocationInterface} from "../interfaces/job-interface";
import {Input} from "@angular/core";


@Component({
  selector: 'app-job-cards',
  templateUrl: './job-cards.component.html',
  styleUrls: ['./job-cards.component.css']
})
export class JobCardsComponent implements OnInit {

  constructor(private jobsService : JobsService) { }

  ngOnInit(): void {

    }

  @Input() jobs! : JobInterface[]


}
