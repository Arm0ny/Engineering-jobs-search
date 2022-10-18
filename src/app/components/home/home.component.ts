import { Component, OnInit } from '@angular/core';
import {JobsService} from "../../services/jobs.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filters!: {
    page: 1,
    city: string,
    level: string
  }
  constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.jobsService.setFilters()
  }



  getFilteredResults($event: { page: 1, city: string; level: string }){
    this.filters = $event
    this.jobsService.setFilters(this.filters)
  }
}
