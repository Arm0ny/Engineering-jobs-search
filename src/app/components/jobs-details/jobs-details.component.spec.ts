import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsDetailsComponent } from './jobs-details.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {JobsService} from "../../services/jobs.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('JobsDetailsComponent', () => {
  let component: JobsDetailsComponent;
  let fixture: ComponentFixture<JobsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsDetailsComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: [JobsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
