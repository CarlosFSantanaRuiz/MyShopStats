import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTopbarComponent } from './login-topbar.component';

describe('LoginTopbarComponent', () => {
  let component: LoginTopbarComponent;
  let fixture: ComponentFixture<LoginTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
