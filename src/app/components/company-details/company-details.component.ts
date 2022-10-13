import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {CompanyInterface} from "../../interfaces/companies-interface";
import {CompaniesService} from "../../services/companies.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() companyId!: number
  company? : CompanyInterface
  subscription? : Subscription
  constructor(private companiesService : CompaniesService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.subscription = this.companiesService.getCompanyDetails(this.companyId)
      .subscribe(response => {
        this.company = response
      })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}

