import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHRComponent } from './update-hr.component';

describe('UpdateHRComponent', () => {
  let component: UpdateHRComponent;
  let fixture: ComponentFixture<UpdateHRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
