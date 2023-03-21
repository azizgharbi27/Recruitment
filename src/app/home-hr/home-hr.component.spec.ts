import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHRComponent } from './home-hr.component';

describe('HomeHRComponent', () => {
  let component: HomeHRComponent;
  let fixture: ComponentFixture<HomeHRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
