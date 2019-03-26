import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHrsOpComponent } from './form-hrs-op.component';

describe('FormHrsOpComponent', () => {
  let component: FormHrsOpComponent;
  let fixture: ComponentFixture<FormHrsOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHrsOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHrsOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
