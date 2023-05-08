import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesRecruitedComponent } from './candidates-recruited.component';

describe('CandidatesRecruitedComponent', () => {
  let component: CandidatesRecruitedComponent;
  let fixture: ComponentFixture<CandidatesRecruitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesRecruitedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesRecruitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
