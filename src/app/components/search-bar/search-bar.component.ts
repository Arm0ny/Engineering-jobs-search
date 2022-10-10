import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {JobsService} from "../../services/jobs.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  filtersForm! : FormGroup
  constructor(private jobService : JobsService) { }
  @Output() OutputFilters = new EventEmitter<{page : 1, city: string, level: string}>()

  filters! : {
    page : 1
    city: string,
    level: string
  }

  ngOnInit(): void {
    this.filtersForm = new FormGroup({
      city: new FormControl('Rome, Italy'),
      level: new FormControl(''),
    })
  }

  onSubmit(): void{
    const {city, level} = this.filtersForm.getRawValue();
    this.filters = {
      page : 1,
      city,
      level
    }
    this.OutputFilters.emit(this.filters)
  }

}
