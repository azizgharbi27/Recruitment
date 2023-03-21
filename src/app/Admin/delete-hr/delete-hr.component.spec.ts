import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHRComponent } from './delete-hr.component';

describe('DeleteHRComponent', () => {
  let component: DeleteHRComponent;
  let fixture: ComponentFixture<DeleteHRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
