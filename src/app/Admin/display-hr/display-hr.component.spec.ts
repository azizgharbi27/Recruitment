import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHRComponent } from './display-hr.component';

describe('DisplayHRComponent', () => {
  let component: DisplayHRComponent;
  let fixture: ComponentFixture<DisplayHRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
