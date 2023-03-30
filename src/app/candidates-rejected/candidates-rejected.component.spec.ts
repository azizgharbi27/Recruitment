import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesRejectedComponent } from './candidates-rejected.component';

describe('CandidatesRejectedComponent', () => {
  let component: CandidatesRejectedComponent;
  let fixture: ComponentFixture<CandidatesRejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesRejectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesRejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
