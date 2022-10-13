import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardsComponent } from './job-cards.component';
import {JobsService} from "../../services/jobs.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('JobCardsComponent', () => {
  let component: JobCardsComponent;
  let fixture: ComponentFixture<JobCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCardsComponent ],
      imports: [HttpClientTestingModule],
      providers: [JobsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
