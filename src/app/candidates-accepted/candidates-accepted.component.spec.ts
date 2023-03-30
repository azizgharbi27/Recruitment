import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesAcceptedComponent } from './candidates-accepted.component';

describe('CandidatesAcceptedComponent', () => {
  let component: CandidatesAcceptedComponent;
  let fixture: ComponentFixture<CandidatesAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesAcceptedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
