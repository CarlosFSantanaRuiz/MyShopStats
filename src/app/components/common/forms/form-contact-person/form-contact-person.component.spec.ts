import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactPersonComponent } from './form-contact-person.component';

describe('FormContactPersonComponent', () => {
  let component: FormContactPersonComponent;
  let fixture: ComponentFixture<FormContactPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContactPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
