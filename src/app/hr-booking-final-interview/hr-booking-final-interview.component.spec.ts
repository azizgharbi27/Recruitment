import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrBookingFinalInterviewComponent } from './hr-booking-final-interview.component';

describe('HrBookingFinalInterviewComponent', () => {
  let component: HrBookingFinalInterviewComponent;
  let fixture: ComponentFixture<HrBookingFinalInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrBookingFinalInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrBookingFinalInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
