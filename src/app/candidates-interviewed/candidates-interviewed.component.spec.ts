import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesInterviewedComponent } from './candidates-interviewed.component';

describe('CandidatesInterviewedComponent', () => {
  let component: CandidatesInterviewedComponent;
  let fixture: ComponentFixture<CandidatesInterviewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesInterviewedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesInterviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
