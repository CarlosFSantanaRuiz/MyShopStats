import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetLoginPageComponent } from './reset-login-page.component';

describe('ResetLoginPageComponent', () => {
  let component: ResetLoginPageComponent;
  let fixture: ComponentFixture<ResetLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
