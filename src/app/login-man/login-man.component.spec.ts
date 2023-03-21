import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginManComponent } from './login-man.component';

describe('LoginManComponent', () => {
  let component: LoginManComponent;
  let fixture: ComponentFixture<LoginManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginManComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
