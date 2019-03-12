import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsOperationComponent } from './hrs-operation.component';

describe('HrsOperationComponent', () => {
  let component: HrsOperationComponent;
  let fixture: ComponentFixture<HrsOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
