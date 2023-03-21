import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMComponent } from './delete-m.component';

describe('DeleteMComponent', () => {
  let component: DeleteMComponent;
  let fixture: ComponentFixture<DeleteMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
