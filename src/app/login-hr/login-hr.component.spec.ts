import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHRComponent } from './login-hr.component';

describe('LoginHRComponent', () => {
  let component: LoginHRComponent;
  let fixture: ComponentFixture<LoginHRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
