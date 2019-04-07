import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsOpDayComponent } from './hrs-op-day.component';

describe('HrsOpDayComponent', () => {
  let component: HrsOpDayComponent;
  let fixture: ComponentFixture<HrsOpDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsOpDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsOpDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
