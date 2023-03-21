import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMComponent } from './update-m.component';

describe('UpdateMComponent', () => {
  let component: UpdateMComponent;
  let fixture: ComponentFixture<UpdateMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
