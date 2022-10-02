import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {JobsService} from "../jobs.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  filtersForm! : FormGroup
  filter?: string
  constructor(private jobService : JobsService) { }

  ngOnInit(): void {
    this.filtersForm = new FormGroup({
      city: new FormControl()
    })
  }

  onSubmit(): void{
    this.filter = this.filtersForm.get('city')?.value
    this.jobService.getJobs(1, this.filter)
  }

}
