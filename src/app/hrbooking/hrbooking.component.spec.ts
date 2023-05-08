import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRBookingComponent } from './hrbooking.component';

describe('HRBookingComponent', () => {
  let component: HRBookingComponent;
  let fixture: ComponentFixture<HRBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
